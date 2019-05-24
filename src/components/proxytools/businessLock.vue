<template>
<div>

test test test test
</div>
</template>
<script>

export default {
  name: 'businessLock',
  description:'清除业务锁',
  data () {
    return {
    value1:"1",

      msg: 'Welcome to Your Vue.js App',
      userkey:'',
      data:[],
      columns:[{
      title: '锁名称',
      key: 'key'
      },{
      title: '业务锁内容',
      key: 'value'
      },  {
            title: '操作',
            key: 'action',
            width: 350,
            align: 'center',
            render: (h, params) => {
                return h('div', [
                    h('Button', {
                        props: {
                            type: 'primary',
                            size: 'small'
                        },
                        style: {
                            marginRight: '5px'
                        },
                        on: {
                            click: () => {
                                this.delrediskey(params)
                            }
                        }
                    }, '删除业务锁')
                ]);
            }

            }

            ]
    }
  },
  methods:{

delrediskey(params){

console.log(params)

  var uri = 'http://172.16.2.39:7280/api/redis/'+this.$store.state.selectedEnv+''
  console.log(uri)

  this.axios.post(uri,
   {"command":"del","arguments":""+params.row.key+""}
  )
  .then(response => {
  console.log(response)
  if(response.data.count <=0 || response.data.status != 0 ) {
     this.$refs.noticeinformation.showalert('alert',response.data.message)
  }
  else
  {
  this.$refs.noticeinformation.showalert('success','执行成功')
  this.handleSubmit(true)
  }
  })
  .catch(e => {

  console.log(e)

  })


},


handleSubmit(showoriginalalert){


console.log(this)
console.log("------")
console.log(this.$refs.noticeinformation)

if(this.userkey == ''){

this.$refs.noticeinformation.showalert('error','未输入用户user_key')

return
}


  console.log(this.$store.state.selectedEnv)

  var uri = 'http://172.16.2.39:7280/api/redis/'+this.$store.state.selectedEnv+''
  console.log(uri)

  this.axios.post(uri,
   {"command":"keys","arguments":"*BusinessLockService*"+this.userkey+"*"}
 )
 .then(response => {
 console.log(response)

 if( response.data.status != 0 ) {
     this.$refs.noticeinformation.showalert('error',response.data.message)
 }
 else
 {

if(!showoriginalalert)
this.$refs.noticeinformation.showalert('success','查询成功,不要轻易删除业务锁，除非你知道原因')
 this.data=response.data.data
 }


 })
 .catch(e => {

 console.log(e)

 })




}


}
}

</script>
<style scoped>

code{



}

</style>
