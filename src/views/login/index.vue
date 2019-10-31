// 创建组件views/login/index.vue
<template>
  <div class="container">
    <el-card class="box-card">
      <img src="../../assets/logo_index.png" width="200px" alt />
      <el-form ref="form" :model="loginForm" :rules="loginRules" status-icon>
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            placeholder="请输入验证码"
            style="width:235px;margin-right:10px"
          ></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-form-item>
            <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
          </el-form-item>
          <el-button type="primary" style="width:100%" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import local from '@/utils/local'
export default {
  data () {
    // 自定义校验，通过正则验证手机号
    const checkMobile = (rule, value, callback) => {
      // 手机号格式：1开头 第二位3-9 9个数字结尾
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('手机号格式不对'))
      }
    }

    return {
      loginForm: {
        mobile: '13911111111',
        code: '246810'
      },
      loginRules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { length: 6, message: '验证码6个字符', trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    // 校验整个表单
    login () {
      // 获取表单组件实例 ---> 调用校验函数
      this.$refs['form'].validate(async valid => {
        if (valid) {
          // async,await异常，当代码报错时，用try捕获异常
          try {
            const { data: { data } } = await this.$http.post('authorizations', this.loginForm)
            local.setUser(data)
            this.$router.push('/')
          } catch (exception) {
            this.$message.error('手机号或验证码输入错误')
          }

          // 发请求并校验手机号和验证码
          // this.$http
          //   .post('authorizations', this.loginForm)
          //   .then(res => {
          //     // 保存用户数据
          //     local.setUser(res.data.data)
          //     this.$router.push('/')
          //   })
          //   .catch(() => {
          //     this.$message.error('手机号或验证码输入错误')
          //   })
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
.container {
  width: 100%;
  height: 100%;
  background: url("../../assets/bgi.jpg") no-repeat center/cover;
  position: absolute;
  top: 0;
  left: 0;
}
.el-card {
  width: 400px;
  height: 340px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  img {
    display: block;
    margin: 0 auto 30px;
  }
}
</style>
