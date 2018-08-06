<template>
  <div class="hello">

  <b-navbar toggleable="md" type="dark" variant="info">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">核心系统测试辅助平台</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item href="#">Jenkins</b-nav-item>
        <b-nav-item href="#">DashBoard</b-nav-item>
        <b-nav-item href="#" disabled>OTA</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="测试环境" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>



      <Menu active-name="1-2" :open-names="['1']" @on-select="select($event)">
          <Submenu name="1" >
              <template slot="title">
                  <Icon type="ios-analytics" />
                  代理系统
              </template>
                  <MenuItem name="dynamic1" >Option 1</MenuItem>
                  <MenuItem name="dynamic2" >Option 2</MenuItem>
                  <MenuItem name="dynamic3">Option 3</MenuItem>
                  <MenuItem name="dynamic4">Option 4</MenuItem>
              </MenuGroup>
          </Submenu>
          <Submenu name="2">
              <template slot="title">
                  <Icon type="ios-filing" />
                  支付系统
              </template>
              <MenuItem name="2-1">Option 5</MenuItem>
              <MenuItem name="2-2">Option 6</MenuItem>
          </Submenu>
          <Submenu name="4">
              <template slot="title">
                  <Icon type="ios-cog" />
                  财务系统
              </template>
              <MenuItem name="4-1">Option 9</MenuItem>
              <MenuItem name="4-2">Option 10</MenuItem>
              <MenuItem name="4-3">Option 11</MenuItem>
              <MenuItem name="4-4">Option 12</MenuItem>
          </Submenu>
          <Submenu name="5">
              <template slot="title">
                  <Icon type="ios-cog" />
                  帐务系统
              </template>
              <MenuItem name="5-1">Option 9</MenuItem>
              <MenuItem name="5-2">Option 10</MenuItem>
              <MenuItem name="5-3">Option 11</MenuItem>
              <MenuItem name="5-4">Option 12</MenuItem>
          </Submenu>

          <Submenu name="6">
              <template slot="title">
                  <Icon type="ios-cog" />
                  帐务系统
              </template>
              <MenuItem name="5-1">Option 9</MenuItem>
              <MenuItem name="5-2">Option 10</MenuItem>
              <MenuItem name="5-3">Option 11</MenuItem>
              <MenuItem name="5-4">Option 12</MenuItem>
          </Submenu>
      </Menu>



          <Tabs type="card" closable @on-tab-remove="handleTabRemove">
          <TabPane  ref="tabPanes" :key="tab.component" :name="tab.component" :label="tab.component" v-if="tab.display" v-for="tab in tabs" >
          <component ref="tabComponents"  :is="tab.component"></component>
          </TabPane>
          </Tabs>

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
import dynamic1 from '@/components/dynamicComponent1.vue'
import dynamic2 from '@/components/dynamicComponent2.vue'
import dynamic3 from '@/components/dynamicComponent3.vue'
import dynamic4 from '@/components/dynamicComponent4.vue'

Vue.component("dynamic1",dynamic1)
Vue.component("dynamic2",dynamic2)
Vue.component("dynamic3",dynamic3)
Vue.component("dynamic4",dynamic4)



Vue.use(boostrapvue)
Vue.use(iview)

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tabs:[
//      {display:true,component:'dynamic1'},  {display:true,component:'dynamic2'}
      ]
    }
  },
  methods:{
   handleTabRemove(name) {
                console.log(name)
                console.log(this.tabs )
                var thiz=this
                var index
                this.tabs.forEach(function(element){

                    if(element.component == name)  {
                    index = thiz.tabs.indexOf(element)
                    element.display = false
                    }
                })


              console.log(index)
              //this.tabs[name].display = false
                this.tabs.splice(index, 1)
                console.log(this.tabs )
            },
            select(event){



            console.log(this)


            //console.log(event)
            //console.log(this.tabs)
            var componentexist=false

            console.log(this.tabs.length)

            if(this.tabs.length == 0 )
            {
              this.tabs.push({display:true,component:event})
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
            this.tabs.push({display:true,component:event})
            this.$refs.tabPanes[0].$parent.activeKey = event
          }

            },

            open(){

            console.log(this)

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
padding-left:20px;

}
</style>
