const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"教师管理",
			            "menuJump":"列表",
			            "tableName":"jiaoshi"
			        }
			    ],
			    "menu":"教师管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"学生管理",
			            "menuJump":"列表",
			            "tableName":"yonghu"
			        }
			    ],
			    "menu":"学生管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"运营事件管理",
			            "menuJump":"列表",
			            "tableName":"yunyingshijian"
			        }
			    ],
			    "menu":"运营事件管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"作业管理",
			            "menuJump":"列表",
			            "tableName":"zuoye"
			        }
			    ],
			    "menu":"作业管理"
			}
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"电访信息管理",
                        "menuJump":"列表",
                        "tableName":"dianfnag"
                    }
                ],
                "menu":"电访信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "审核",
                            "删除"
                        ],
                        "menu":"教师请假管理",
                        "menuJump":"列表",
                        "tableName":"jiaoshiqingjia"
                    }
                ],
                "menu":"教师请假管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"备课信息管理",
                        "menuJump":"列表",
                        "tableName":"jiaoxueshipin"
                    }
                ],
                "menu":"备课信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"会议管理",
                        "menuJump":"列表",
                        "tableName":"kaihuitongzhi"
                    }
                ],
                "menu":"会议管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"课程信息管理",
                        "menuJump":"列表",
                        "tableName":"kecheng"
                    }
                ],
                "menu":"课程信息管理"
            }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"班级管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryBanji"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"请假类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryJiaoshiqingjia"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"备课类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryJiaoxueshipin"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"会议类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryKaihuitongzhi"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"课程类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryKecheng"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"公告类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryNews"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"运营事件类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryYunyingshijian"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"作业类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryZuoye"
			        }
			    ],
			    "menu":"基础数据管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"交流平台管理",
			            "menuJump":"列表",
			            "tableName":"forum"
			        }
			    ],
			    "menu":"交流平台管理"
			}
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"通知公告管理",
                        "menuJump":"列表",
                        "tableName":"news"
                    }
                ],
                "menu":"通知公告管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
	{
	    "backMenu":[
	        {
			    "child":[
			        {
			            "buttons":[
			                "查看"
			            ],
			            "menu":"学生管理",
			            "menuJump":"列表",
			            "tableName":"yonghu"
			        }
			    ],
			    "menu":"学生管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"作业管理",
			            "menuJump":"列表",
			            "tableName":"zuoye"
			        }
			    ],
			    "menu":"作业管理"
			}
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增",
	                        "修改",
	                        "删除"
	                    ],
	                    "menu":"电访信息管理",
	                    "menuJump":"列表",
	                    "tableName":"dianfnag"
	                }
	            ],
	            "menu":"电访信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增",
	                        "删除"
	                    ],
	                    "menu":"教师请假管理",
	                    "menuJump":"列表",
	                    "tableName":"jiaoshiqingjia"
	                }
	            ],
	            "menu":"教师请假管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增",
	                        "修改",
	                        "删除"
	                    ],
	                    "menu":"备课信息管理",
	                    "menuJump":"列表",
	                    "tableName":"jiaoxueshipin"
	                }
	            ],
	            "menu":"备课信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"会议管理",
	                    "menuJump":"列表",
	                    "tableName":"kaihuitongzhi"
	                }
	            ],
	            "menu":"会议管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增",
	                        "修改",
	                        "删除"
	                    ],
	                    "menu":"课程信息管理",
	                    "menuJump":"列表",
	                    "tableName":"kecheng"
	                }
	            ],
	            "menu":"课程信息管理"
	        }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"交流平台管理",
			            "menuJump":"列表",
			            "tableName":"forum"
			        }
			    ],
			    "menu":"交流平台管理"
			}
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"通知公告管理",
	                    "menuJump":"列表",
	                    "tableName":"news"
	                }
	            ],
	            "menu":"通知公告管理"
	        }
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"教师",
	    "tableName":"jiaoshi"
	}
]
    }
}
export default menu;