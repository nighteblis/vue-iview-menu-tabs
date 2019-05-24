<template>
    <div>
    
    
   how to use ivewui abs 
    
    
    </div>
</template>
<script>
    export default {
    
        name: 'paystatusquery',
    
        description: '支付状态查询工具',
    
        data() {
    
            return {
    
                msg: 'Welcome to Your Vue.js App',
    
                proxyserialno1: '',
    
                proxyserialno2: '',
    
                proxyserialno3: '',
    
                columns1: [{
    
                        title: '代理串号',
    
                        key: 'business_order_id'
    
                    },
    
                    {
    
                        title: '业务类型',
    
                        key: 'business_type'
    
                    }, {
    
                        title: '用户key',
    
                        key: 'user_key'
    
                    }, {
    
                        title: '快捷支付状态',
    
                        key: 'quick_pay_status'
    
                    }, {
    
                        title: '消息',
    
                        key: 'message'
    
                    }, {
    
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
    
                                            this.success(params)
    
                                        }
    
                                    }
    
                                }, '置为成功'),
    
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
    
                                            this.inprogress(params)
    
                                        }
    
                                    }
    
                                }, '置为处理中'),
    
                                h('Button', {
    
                                    props: {
    
                                        type: 'error',
    
                                        size: 'small'
    
                                    },
    
                                    style: {
    
                                        marginRight: '5px'
    
                                    },
    
                                    on: {
    
                                        click: () => {
    
                                            this.fail(params)
    
                                        }
    
                                    }
    
                                }, '置为失败')
    
                            ]);
    
                        }
    
                    }
    
                ],
    
                columns2: [{
    
                        title: '代理串号',
    
                        key: 'business_order_id'
    
                    },
    
                    {
    
                        title: '业务类型',
    
                        key: 'business_type'
    
                    }, {
    
                        title: '代付状态',
    
                        key: 'pay_status'
    
                    }, {
    
                        title: '消息',
    
                        key: 'message'
    
                    }, {
    
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
    
                                            this.success(params)
    
                                        }
    
                                    }
    
                                }, '置为成功'),
    
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
    
                                            this.inprogress(params)
    
                                        }
    
                                    }
    
                                }, '置为处理中'),
    
                                h('Button', {
    
                                    props: {
    
                                        type: 'error',
    
                                        size: 'small'
    
                                    },
    
                                    style: {
    
                                        marginRight: '5px'
    
                                    },
    
                                    on: {
    
                                        click: () => {
    
                                            this.fail(params)
    
                                        }
    
                                    }
    
                                }, '置为失败')
    
                            ]);
    
                        }
    
                    }
    
                ],
    
                columns3: [{
    
                        title: '代理串号',
    
                        key: 'business_order_id'
    
                    },
    
                    {
    
                        title: '业务类型',
    
                        key: 'business_type'
    
                    }, {
    
                        title: '代扣状态',
    
                        key: 'gather_status'
    
                    }, {
    
                        title: '消息',
    
                        key: 'message'
    
                    }, {
    
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
    
                                            this.success(params)
    
                                        }
    
                                    }
    
                                }, '置为成功'),
    
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
    
                                            this.inprogress(params)
    
                                        }
    
                                    }
    
                                }, '置为处理中'),
    
                                h('Button', {
    
                                    props: {
    
                                        type: 'error',
    
                                        size: 'small'
    
                                    },
    
                                    style: {
    
                                        marginRight: '5px'
    
                                    },
    
                                    on: {
    
                                        click: () => {
    
                                            this.fail(params)
    
                                        }
    
                                    }
    
                                }, '置为失败')
    
                            ]);
    
                        }
    
                    }
    
                ],
    
                data1: [],
    
                data2: [],
    
                data3: []
    
            }
    
        },
    
        methods: {
    
            success(params) {
    
                console.log(params.row.business_order_id)
    
    
    
                var table = ''
    
                var modifystatus = ''
    
                var statusname = ''
    
                if (params.row.hasOwnProperty('quick_pay_status')) {
    
    
    
                    table = 'user_quick_pay_info'
    
                    statusname = 'quick_pay_status'
    
                    modifystatus = 'QUICK_PAY_SUCCESS'
    
                }
    
    
    
                if (params.row.hasOwnProperty('gather_status')) {
    
    
    
                    table = 'user_gather_info'
    
                    modifystatus = 'GATHER_SUCCESS'
    
                    statusname = 'gather_status'
    
                }
    
    
    
                if (params.row.hasOwnProperty('pay_status')) {
    
    
    
                    table = 'user_pay_info'
    
                    modifystatus = 'PAY_SUCCESS'
    
                    statusname = 'pay_status'
    
                }
    
                console.log("-----------" + statusname)
    
    
    
                var sql = {
    
                    "sql": "update " + table + " set " + statusname + "='" + modifystatus + "' , message='手动修改状态为" + modifystatus + "', result_time='" + new Date().toLocaleDateString() + "'  where business_order_id = '" + params.row.business_order_id + "'"
    
                }
    
    
    
                var uri = 'http://172.16.2.39:7280/api/sql/' + this.$store.state.selectedEnv + '/pay'
    
                this.axios.post(uri,
    
                        sql
    
                    )
    
                    .then(response => {
    
    
    
                        console.log(response)
    
    
    
                        if (response.data.count == 1) {
    
                            if (params.row.hasOwnProperty('quick_pay_status')) {
    
    
    
                                this.handleSubmit1()
    
                            }
    
    
    
                            if (params.row.hasOwnProperty('gather_status')) {
    
    
    
                                this.handleSubmit3()
    
                            }
    
    
    
                            if (params.row.hasOwnProperty('pay_status')) {
    
    
    
                                this.handleSubmit2()
    
                            }
    
                        }
    
    
    
                    })
    
                    .catch(e => {
    
    
    
                        console.log(e)
    
    
    
                    })
    
    
    
    
    
    
    
            },
    
            inprogress(params) {
    
                console.log(params)
    
    
    
                var table = ''
    
                var modifystatus = ''
    
                var statusname = ''
    
                if (params.row.hasOwnProperty('quick_pay_status')) {
    
    
    
                    table = 'user_quick_pay_info'
    
                    statusname = 'quick_pay_status'
    
                    modifystatus = 'QUICK_PAY_IN_PROCESS'
    
                }
    
    
    
                if (params.row.hasOwnProperty('gather_status')) {
    
    
    
                    table = 'user_gather_info'
    
                    modifystatus = 'GATHER_IN_PROCESS'
    
                    statusname = 'gather_status'
    
                }
    
    
    
                if (params.row.hasOwnProperty('pay_status')) {
    
    
    
                    table = 'user_pay_info'
    
                    modifystatus = 'PAY_IN_PROCESS'
    
                    statusname = 'pay_status'
    
                }
    
                console.log("-----------" + statusname)
    
    
    
                var sql = {
    
                    "sql": "update " + table + " set " + statusname + "='" + modifystatus + "' , message='手动修改状态为" + modifystatus + "' , result_time='" + new Date().toLocaleDateString() + "' where business_order_id = '" + params.row.business_order_id + "'"
    
                }
    
    
    
                var uri = 'http://172.16.2.39:7280/api/sql/' + this.$store.state.selectedEnv + '/pay'
    
                this.axios.post(uri,
    
                        sql
    
                    )
    
                    .then(response => {
    
    
    
                        console.log(response)
    
    
    
                        if (response.data.count == 1) {
    
                            if (params.row.hasOwnProperty('quick_pay_status')) {
    
    
    
                                this.handleSubmit1()
    
                            }
    
    
    
                            if (params.row.hasOwnProperty('gather_status')) {
    
    
    
                                this.handleSubmit3()
    
                            }
    
    
    
                            if (params.row.hasOwnProperty('pay_status')) {
    
    
    
                                this.handleSubmit2()
    
                            }
    
                        }
    
    
    
                    })
    
                    .catch(e => {
    
    
    
                        console.log(e)
    
    
    
                    })
    
    
    
    
    
    
    
            },
    
            fail(params) {
    
                console.log(params)
    
    
    
                var table = ''
    
                var modifystatus = ''
    
                var statusname = ''
    
                if (params.row.hasOwnProperty('quick_pay_status')) {
    
    
    
                    table = 'user_quick_pay_info'
    
                    statusname = 'quick_pay_status'
    
                    modifystatus = 'QUICK_PAY_FAIL'
    
                }
    
    
    
                if (params.row.hasOwnProperty('gather_status')) {
    
    
    
                    table = 'user_gather_info'
    
                    modifystatus = 'GATHER_FAIL'
    
                    statusname = 'gather_status'
    
                }
    
    
    
                if (params.row.hasOwnProperty('pay_status')) {
    
    
    
                    table = 'user_pay_info'
    
                    modifystatus = 'PAY_FAIL'
    
                    statusname = 'pay_status'
    
                }
    
                console.log("-----------" + statusname)
    
    
    
                var sql = {
    
                    "sql": "update " + table + " set " + statusname + "='" + modifystatus + "' , message='手动修改状态为" + modifystatus + "' , result_time='" + new Date().toLocaleDateString() + "' where business_order_id = '" + params.row.business_order_id + "'"
    
                }
    
    
    
                var uri = 'http://172.16.2.39:7280/api/sql/' + this.$store.state.selectedEnv + '/pay'
    
                this.axios.post(uri,
    
                        sql
    
                    )
    
                    .then(response => {
    
    
    
                        console.log(response)
    
    
    
                        if (response.data.count == 1) {
    
                            if (params.row.hasOwnProperty('quick_pay_status')) {
    
    
    
                                this.handleSubmit1()
    
                            }
    
    
    
                            if (params.row.hasOwnProperty('gather_status')) {
    
    
    
                                this.handleSubmit3()
    
                            }
    
    
    
                            if (params.row.hasOwnProperty('pay_status')) {
    
    
    
                                this.handleSubmit2()
    
                            }
    
                        }
    
    
    
                    })
    
                    .catch(e => {
    
    
    
                        console.log(e)
    
    
    
                    })
    
    
    
            },
    
    
    
            handleSubmit1() {
    
    
    
    
    
                var sql = {
    
                    "sql": "select * from user_quick_pay_info where business_order_id = '" + this.proxyserialno1 + "'"
    
                }
    
    
    
                var uri = 'http://172.16.2.39:7280/api/sql/' + this.$store.state.selectedEnv + '/pay'
    
                this.axios.post(uri,
    
                        sql
    
                    )
    
                    .then(response => {
    
                        console.log(response)
    
                        this.data1 = response.data.data
    
                    })
    
                    .catch(e => {
    
    
    
                        console.log(e)
    
    
    
                    })
    
    
    
            },
    
            handleSubmit2() {
    
    
    
    
    
    
    
                var sql = {
    
                    "sql": "select * from user_pay_info where business_order_id = '" + this.proxyserialno2 + "'"
    
                }
    
    
    
                var uri = 'http://172.16.2.39:7280/api/sql/' + this.$store.state.selectedEnv + '/pay'
    
                this.axios.post(uri,
    
                        sql
    
                    )
    
                    .then(response => {
    
                        console.log(response)
    
                        this.data2 = response.data.data
    
                    })
    
                    .catch(e => {
    
    
    
                        console.log(e)
    
    
    
                    })
    
    
    
    
    
            },
    
            handleSubmit3() {
    
    
    
    
    
    
    
                var sql = {
    
                    "sql": "select * from user_gather_info where business_order_id = '" + this.proxyserialno3 + "'"
    
                }
    
    
    
                var uri = 'http://172.16.2.39:7280/api/sql/' + this.$store.state.selectedEnv + '/pay'
    
                this.axios.post(uri,
    
                        sql
    
                    )
    
                    .then(response => {
    
                        console.log(response)
    
                        this.data3 = response.data.data
    
                    })
    
                    .catch(e => {
    
    
    
                        console.log(e)
    
    
    
                    })
    
    
    
    
    
    
    
            }
    
        }
    
    
    
    }
</script>


<style scoped>
    
</style>
