<template>
  <div class="Core System Test Asistor">


  <b-navbar toggleable="md" type="dark" variant="info">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">核心系统测试辅助平台</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item href="http://qa.heika.com/jenkins/" target="_blank">Jenkins</b-nav-item>
        <b-nav-item href="#">DashBoard</b-nav-item>
        <b-nav-item href="#" disabled>OTA</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">


        <span style="color:white;margin-left:20px;margin-top:8px;font-size:1.2em;"></span> <Select v-model="selectedEnv" @on-change="selectenv"
         placeholder="测试环境选择" style="width:150px">
            <Option v-for="env in coreEnvs.envs"  :value="env.envname"  :key="env.envname">{{ env.envname }}</Option>
        </Select>

        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em>环境详情</em>
          </template>
          <b-dropdown-item href="#">coming </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>


      <Menu active-name="1-2" :open-names="['1']" @on-select="select($event)">
          <Submenu name="1" >
              <template slot="title">
                  <Icon type="ios-people" />
                  代理系统
              </template>

                    <MenuItem v-for="proxytool in menutiems.proxy" :key="proxytool.name"  :ref="'menuitem'+proxytool.name" :name="proxytool.name">{{proxytool.label}}</MenuItem>

              </MenuGroup>
          </Submenu>
          <Submenu name="2">
              <template slot="title">
                  <Icon type="logo-usd" />
                  支付系统
              </template>
  <MenuItem v-for="paytool in menutiems.pay" :key="paytool.name"  :ref="'menuitem'+paytool.name" :name="paytool.name">{{paytool.label}}</MenuItem>
          </Submenu>
          <Submenu name="4">
              <template slot="title">
                  <Icon type="md-key" />
                  财务系统
              </template>
<MenuItem v-for="financetool in menutiems.finance" :key="financetool.name"  :ref="'menuitem'+financetool.name" :name="financetool.name">{{financetool.label}}</MenuItem>
          </Submenu>
          <Submenu name="5">
              <template slot="title">
                  <Icon type="md-book" />
                  帐务系统
              </template>
<MenuItem v-for="accounttool in menutiems.account" :key="accounttool.name"  :ref="'menuitem'+accounttool.name" :name="accounttool.name">{{accounttool.label}}</MenuItem>
          </Submenu>

      </Menu>


          <Tabs type="card" closable @on-tab-remove="handleTabRemove">
          <TabPane  ref="tabPanes" :key="tab.component" :name="tab.component" :label="tab.label" v-if="tab.display" v-for="tab in tabs" >


          <component ref="tabComponents"  :is="tab.component"></component>
          </TabPane>
          </Tabs>
<div id="footer">
<Divider />
@Core System QA</div>
  </div>
</template>

<script>

import Vue from 'vue'
import vuetabs from 'vue-nav-tabs'
import boostrapvue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'iview/dist/styles/iview.css'
import iview from 'iview'
import loanquery from '@/components/loanquery.vue'
import repayquery from '@/components/repayquery.vue'
import dynamic3 from '@/components/dynamicComponent3.vue'
import businessLock from '@/components/businessLock.vue'
import noticeinformation from '@/components/noticeinformation.vue'
import proxyuserpaystatus from '@/components/proxyuserpaystatus.vue'
import paydownquery from '@/components/paydownquery.vue'
import accountqueryloanplan from '@/components/accountqueryloanplan.vue'


import coreEnvs from '@/config/coreEnvs.js'
import menuitems from '@/config/menuitems.js'
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

Vue.component(loanquery.name,loanquery)
Vue.component(repayquery.name,repayquery)
Vue.component(paystatusquery.name,paystatusquery)
Vue.component("businessLock",businessLock)
Vue.component("noticeinformation",noticeinformation)
Vue.component("paydownquery",paydownquery)
Vue.component("proxyuserpaystatus",proxyuserpaystatus)
Vue.component("accountqueryloanplan",accountqueryloanplan)

Vue.use(boostrapvue)
Vue.use(iview)

console.log(coreEnvs)


export default {
  name: 'Home',

  data () {
    return {
    alert:this.$store.state.alert,
      msg: 'Welcome to Your Vue.js App',
      tabs:[
      ],
      menutiems: menuitems,
      coreEnvs:coreEnvs,
      selectedEnv: 'env_150',
    }
  },
  methods:{
  showinformation(){

  },
   handleTabRemove(name) {
               // console.log(name)
                console.log(" helloworldvue "+this.$store.state.selectedEnv )
                var thiz=this
                var index
                this.tabs.forEach(function(element){

                    if(element.component == name)  {
                    index = thiz.tabs.indexOf(element)
                    element.display = false
                    }
                })


              // console.log(index)
              //this.tabs[name].display = false
                this.tabs.splice(index, 1)
              //  console.log(this.tabs )
            },
            select(event){

            console.log(" helloworldvue ")
            console.log(this.$store.state.selectedEnv)
            console.log(event)
            //console.log(this.tabs)
            var componentexist=false

            console.log(this.tabs.length)

            console.log("===========")
            console.log(this.$refs['menuitem'+event])
            console.log('menuitem'+event)
            var labelname = this.$refs['menuitem'+event][0].$el.innerText

            if(this.tabs.length == 0 )
            {


              this.tabs.push({display:true,component:event,label:labelname})
              return
            }
            else {

              console.log(this.$refs.tabPanes[0].$parent)


            }



            console.log(this.$refs.tabPanes)

            var thiz = this
            this.$refs.tabPanes.forEach(function(element){


                if(element.name == event)  {
                componentexist = true
                thiz.$refs.tabPanes[0].$parent.activeKey = event

                //element.display = true
                return
                }
            })

            if(!componentexist)
            {
            this.tabs.push({display:true,component:event,label:labelname})
            this.$refs.tabPanes[0].$parent.activeKey = event
          }

            },

            open(){

            console.log(this)

            },
            selectenv(selectvalue){

              this.$store.state.selectedEnv = selectvalue
              //console.log(this.$store.state.selectedEnv)
              //console.log(this.selectedEnv)
            }
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.ivu-menu{

float:left;
}

.ivu-tabs{

margin-top:20px;


}

/**
ivu-icon ivu-icon-ios-hammer
**/

body{
font-size:1.1em;
}
ul.ivu-menu{

margin-right:20px;

}
</style>
