<template>
    <div>
   测试 
    
    </div>
</template>
<script>
    export default {
    
        name: 'repayquery',
    
        description: '还款Job查询',
    
        data() {
    
            return {
    
                userpaydata: [],
    
                userpaycolumns: [{
    
                        title: '还款代理串号',
    
                        key: 'proxy_serial_no'
    
                    },
    
                    {
    
                        title: '还款编号',
    
                        key: 'partner_loan_no'
    
                    },
    
                    {
    
                        title: '还款金额',
    
                        key: 'amount'
    
                    },
    
                    {
    
                        title: '支付渠道',
    
                        key: 'pay_channel'
    
                    },
    
                    {
    
                        title: '还款主体',
    
                        key: 'pay_subject'
    
                    },
    
                    {
    
                        title: '还款类型',
    
                        key: 'pay_target_type'
    
                    }, {
    
                        title: '发起方式',
    
                        key: 'pay_launch_type'
    
                    },
    
                    {
    
                        title: '账务检查结果',
    
                        key: 'account_check_status'
    
                    },
    
                    {
    
                        title: '支付状态',
    
                        key: 'payment_confirm_status'
    
                    },
    
                    {
    
                        title: '账务上报',
    
                        key: 'account_report_status'
    
                    },
    
                    {
    
                        title: '备注',
    
                        key: 'comments',
    
                        render: (h, params) => {
    
                            return h('div', [
    
                                'status - 2:成功 0:初始化 1:处理中 其他:失败  |  发起方式 - 0:自动划扣, 1:主动还款'
    
                            ]);
    
                        }
    
                    },
    
    
    
                    {
    
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
    
                                            this.listJobs(params)
    
                                        }
    
                                    }
    
                                }, '查看还款Job'),    
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
    
                                            this.initpaymentstatus(params)
    
                                        }
    
                                    }
    
                                }, '初始化支付确认'),
    
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
    
                                            this.initaccountreportstatus(params)
    
                                        }
    
                                    }
    
                                }, '初始化账务上报')
    
                            ]);
    
                        }
    
                    }
    
                ],
    
                alert: {
    
                    success: {
    
                        display: false,
    
                        message: ''
    
                    },
    
                    warning: {
    
                        display: false,
    
                        message: ''
    
                    },
    
                    error: {
    
                        display: false,
    
                        message: ''
    
                    }
    
    
    
                },
    
                msg: 'Welcome to Your Vue.js App',
    
                paytargettype: '',
    
                partnerloanno: '',
                partnerPayNo:'未选择要查询的还款序列号',
    
                data: [],
    
                paytarget: '',
    
                targettype: [{
    
                        value: 'BILL',
    
                        label: '账单还款'
    
                    },
    
                    {
    
                        value: 'LOAN',
    
                        label: '订单还款'
    
                    }
    
                ],
    
                columns: [{
    
                        title: 'JobId',
    
                        key: 'id',
    
                        width: 100
    
                    },
    
                    {
    
                        title: 'Job名称',
    
                        key: 'machine_status'
    
                    },
    
                    {
    
                        title: '代理串号',
    
                        key: 'proxy_serial_no'
    
                    },
    
                    {
    
                        title: 'Job状态',
    
                        key: 'job_status',
    
                        width: 90
    
                    },
    
                    {
    
                        title: '错误',
    
                        key: 'last_error'
    
                    },
    
                    {
    
                        title: '执行次数',
    
                        key: 'execute_times',
    
                        width: 90
    
                    },
    
                    {
    
                        title: 'job参数',
    
                        key: 'job_param',
    
                        width: 300
    
                    }, {
    
                        title: 'Action',
    
                        key: 'action',
    
                        width: 200,
    
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
    
                                            this.initjob(params)
    
                                        }
    
                                    }
    
                                }, '重新执行'),
    
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
    
                                            this.failjob(params)
    
                                        }
    
                                    }
    
                                }, '置为失败')
    
                            ]);
    
                        }
    
                    }
    
    
    
    
    
                ]
    
            }
    
        },
    
    
    
        methods: {
    
            listJobs(params){

                var repayProxySerialNo=params.row.proxy_serial_no;
                this.partnerPayNo = params.row.partner_pay_no;

                var sql = {
    
                    "sql": "select * from job where proxy_serial_no in ('" + repayProxySerialNo + "')"
    
                }
            
    
                var uri = 'http://172.16.2.39:7280/api/sql/' + this.$store.state.selectedEnv + '/proxy'
    
                this.axios.post(uri,
    
                        sql
    
                    )
    
                    .then(response => {
    
                        console.log(response)
    
                        this.data = response.data.data
    
                    })
    
                    .catch(e => {
    
                        console.log(e)
    
                    })

            },
    
    
    
            initpaymentstatus(params) {
    
    
    
                var uri = 'http://172.16.2.39:7280/api/sql/' + this.$store.state.selectedEnv + '/proxy'
    
                this.axios.post(uri, {
    
                        "sql": "update  user_pay  set payment_confirm_status = 0,payment_confirm_time = null where proxy_serial_no ='" + params.row.proxy_serial_no + "'"
    
                    })
    
                    .then(response => {
    
                        console.log(response)
    
                        if (response.data.count <= 0 || response.data.status != 0) {
    
                            this.showalert('alert', response.data.message)
    
                        } else {
    
                            this.showalert('success', '执行成功')
    
                            this.handleSubmit(true)
    
                        }
    
                    })
    
                    .catch(e => {
    
    
    
                        console.log(e)
    
    
    
                    })
    
    
    
            },
    
            initaccountreportstatus(params) {
    
    
    
                var uri = 'http://172.16.2.39:7280/api/sql/' + this.$store.state.selectedEnv + '/proxy'
    
                console.log(uri)
    
    
    
                this.axios.post(uri, {
    
                        "sql": "update  user_pay  set account_report_status = 0,account_report_time=null where proxy_serial_no ='" + params.row.proxy_serial_no + "'"
    
                    })
    
                    .then(response => {
    
                        console.log(response)
    
                        if (response.data.count <= 0 || response.data.status != 0) {
    
                            this.showalert('alert', response.data.message)
    
                        } else {
    
                            this.showalert('success', '执行成功')
    
                            this.handleSubmit(true)
    
                        }
    
                    })
    
                    .catch(e => {
    
    
    
                        console.log(e)
    
    
    
                    })
    
    
    
    
    
            },
    
    
    
    
    
            showalert(alert, message) {
    
    
    
                console.log(message)
    
                this.alert.success.display = false
    
                this.alert.warning.display = false
    
                this.alert.error.display = false
    
                this.alert[alert].message = message
    
                this.alert[alert].display = true
    
    
    
            },
    
    
    
            disappearalert(alert) {
    
                this.alert[alert].display = false
    
            },
    
    
    
            initjob(params) {
    
                console.log(params.row.id)
    
                var uri = 'http://172.16.2.39:7280/api/sql/' + this.$store.state.selectedEnv + '/proxy'
    
                console.log(uri)
    
    
    
                this.axios.post(uri, {
    
                        "sql": "update  job  set job_status = 0,last_error = '手动修改为0重新执行' where id =" + params.row.id + ""
    
                    })
    
                    .then(response => {
    
                        console.log(response)
    
    
    
                        this.handleSubmit(true)
    
    
    
                    })
    
                    .catch(e => {
    
    
    
                        console.log(e)
    
    
    
                    })
    
    
    
    
    
            },
    
    
    
            failjob(params) {
    
    
    
                console.log(params.row.id)
    
                var uri = 'http://172.16.2.39:7280/api/sql/' + this.$store.state.selectedEnv + '/proxy'
    
                console.log(uri)
    
    
    
                this.axios.post(uri, {
    
                        "sql": "update  job  set job_status = -1 ,last_error = '手动修改为-1' where id =" + params.row.id + ""
    
                    })
    
                    .then(response => {
    
                        console.log(response)
    
                        this.handleSubmit(true)

    
                    })
    
                    .catch(e => {
    
    
    
                        console.log(e)
    
    
    
                    })
    
    
    
    
    
            },
    
    
    
    
    
            handleSubmit(showoriginalalert) {
    
    
    
                if (this.partnerloanno == '') {
    
    
    
                    this.showalert('error', '未输入三方借款编号或者账单编号')
    
    
    
                    return
    
                }
    
    /*
    
                var sql = {
    
                    "sql": "select * from job where proxy_serial_no in (select proxy_serial_no from user_pay where partner_loan_no = '" + this.partnerloanno + "')"
    
                }
            
                console.log(this.partnerloanno)
    
                var uri = 'http://172.16.2.39:7280/api/sql/' + this.$store.state.selectedEnv + '/proxy'
    
                this.axios.post(uri,
    
                        sql
    
                    )
    
                    .then(response => {
    
                        console.log(response)
    
                        this.data = response.data.data
    
                    })
    
                    .catch(e => {
    
    
    
                        console.log(e)
    
    
    
                    })
    
    */
    
    
    
    
    
                // select from user_loan Table
    
    
    
                var uri = 'http://172.16.2.39:7280/api/sql/' + this.$store.state.selectedEnv + '/proxy'
    
                console.log(uri)
    
                this.axios.post(uri, {
    
                        "sql": "select * from user_pay where partner_loan_no = '" + this.partnerloanno + "'"
    
                    })
    
                    .then(response => {
    
                        console.log(response)
    
    
    
    
    
    
    
                        if (response.data.status != 0) {
    
                            this.showalert('error', response.data.message)
    
                        } else {
    
    
    
                            this.userpaydata = response.data.data
    
    
    
                            if (!showoriginalalert)
    
                                this.showalert('success', '查询成功')
    
    
    
    
    
    
    
    
    
                        }
    
    
    
                    })
    
                    .catch(e => {
    
                        console.log(e)
    
                    })
    
    
            },
    
    
    
            selectpaytype(selectvalue) {
    
    
    
    
    
    
    
                this.paytargettype = selectvalue
    
                console.log(this.paytarget)
    
            }
    
        }
    
    }
</script>
<style scoped>
    
</style>
