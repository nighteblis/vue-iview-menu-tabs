<template>
  <div class="Core System Test Asistor">


  <b-navbar toggleable="md" type="dark" variant="info">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">测试平台示例</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item href="#" target="_blank">Jenkins</b-nav-item>
        <b-nav-item href="#">DashBoard</b-nav-item>
        <b-nav-item href="#" disabled>OTA</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">


        <span style="color:white;margin-left:20px;margin-top:8px;font-size:1.2em;"></span> <Select v-model="selectedEnv" @on-change="selectenv"
         placeholder="环境选择" style="width:150px">
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
                  菜单1
              </template>

                    <MenuItem v-for="proxytool in menutiems.proxy" :key="proxytool.name"  :ref="'menuitem'+proxytool.name" :name="proxytool.name">{{proxytool.label}}</MenuItem>

              </MenuGroup>
          </Submenu>
          <Submenu name="2">
              <template slot="title">
                  <Icon type="logo-usd" />
                  菜单2
              </template>
  <MenuItem v-for="paytool in menutiems.pay" :key="paytool.name"  :ref="'menuitem'+paytool.name" :name="paytool.name">{{paytool.label}}</MenuItem>
          </Submenu>
          <Submenu name="4">
              <template slot="title">
                  <Icon type="md-key" />
                  菜单3
              </template>
<MenuItem v-for="financetool in menutiems.finance" :key="financetool.name"  :ref="'menuitem'+financetool.name" :name="financetool.name">{{financetool.label}}</MenuItem>
          </Submenu>
          <Submenu name="5">
              <template slot="title">
                  <Icon type="md-book" />
                  菜单4
              </template>
<MenuItem v-for="accounttool in menutiems.account" :key="accounttool.name"  :ref="'menuitem'+accounttool.name" :name="accounttool.name">{{accounttool.label}}</MenuItem>
          </Submenu>

      </Menu>


          <Tabs type="card" v-model="activeTab" closable @on-tab-remove="handleTabRemove">
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
import test1 from '@/components/proxytools/loanquery.vue'

import test2 from '@/components/proxytools/repayquery.vue'
import test5 from '@/components/paytools/paystatusquery.vue'
import test3 from '@/components/proxytools/businessLock.vue'
import noticeinformation from '@/components/common/noticeinformation.vue'
import test4 from '@/components/proxytools/paydownquery.vue'
import test6 from '@/components/accounttools/accountqueryloanplan.vue'


import coreEnvs from '@/config/coreEnvs.js'
import menuitems from '@/config/menuitems.js'
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

Vue.component('test1',test1)
Vue.component('test2',test2)
Vue.component('test5',test5)
Vue.component("test3",test3)
Vue.component("noticeinformation",noticeinformation)
Vue.component("test4",test4)
Vue.component("test6",test6)

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
      tabsHashTable: {},
      activeTab:'',
      menutiems: menuitems,
      coreEnvs:coreEnvs,
      selectedEnv: 'env_150',
    }
  },
  methods:{
  showinformation(){

  },


    handleTabRemove(name) {
      // set this tab display to be false
      this.tabs[this.tabsHashTable[name]].display = false;

      // if displayed tabs size is 0, then show welcome message
      if (this.tabs.filter(tab => tab.display == true).length == 0)
        this.welcomedisplay = true;
    },

    select(event) {
      console.log("---------select -------------")
      // not display the welcome window
      this.welcomedisplay = false

      if (this.tabsHashTable[event] == undefined) {
        // 如果此标签页没有打开过

        let labelname = this.$refs["menuitem" + event][0].$el.innerText
        // add tab
        this.tabs.push({ display: true, component: event, label: labelname })
        //add tab hash table (this used to locate the tab in tab array)
        this.tabsHashTable[event] = this.tabs.length - 1
      } else {
        
        if(this.tabs[this.tabsHashTable[event]].display  === false)
        {
             // 曾经打开过又隐藏[叉掉]的
            this.tabs[this.tabsHashTable[event]].display = true
          }
        

      }
      // 设置打开的tab为当前显示的tab
      this.activeTab = event
      console.log(this)
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
