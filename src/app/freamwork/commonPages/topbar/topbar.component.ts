import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  items: MenuItem[];

  constructor() {
  }

  ngOnInit(): void {
    this.items = [
      {
        label: '信贷管理',
        id: 'SID0100000000',
        items: [
          {
            label: '额度押品管理',
            id: 'SID0101000000',
            items: [
              {
                label: '统一额度系统',
                id: 'SID0101010000',
                items: [
                  {
                    label: '合作方项目额度管理',
                    id: 'SID0101010100',
                    items: [
                      {
                        label: '合作方项目额度查询',
                        id: 'SID0101010101',
                        // icon: [
                        //   '/pages/financial-risk/amount/partner'
                        // ]
                      },
                      {
                        label: '合作方项目额度冻结',
                        id: 'SID0101010102',
                        // icon: [
                        //   '/pages/financial-risk/amount/partnerfreeze'
                        // ]
                      },
                      {
                        label: '合作方项目额度解冻',
                        id: 'SID0101010103',
                        // icon: [
                        //   '/pages/financial-risk/amount/partnerthaw'
                        // ]
                      }
                    ]
                  },
                  {
                    label: '客户额度管理',
                    id: 'SID0101010200',
                    items: [
                      {
                        label: '额度信息查询',
                        id: 'SID0101010201',
                        // icon: [
                        //   '/pages/financial-risk/amount/infomanage'
                        // ]
                      },
                      {
                        label: '额度冻结',
                        id: 'SID0101010202',
                        // icon: [
                        //   '/pages/financial-risk/amount/freezeButton'
                        // ]
                      },
                      {
                        label: '额度解冻',
                        id: 'SID0101010203',
                        // icon: [
                        //   '/pages/financial-risk/amount/thawButton'
                        // ]
                      },
                      {
                        label: '额度冻结解冻明细查询',
                        id: 'SID0101010204',
                        // icon: [
                        //   '/pages/financial-risk/amount/freezethawdetail'
                        // ]
                      }
                    ]
                  },
                  {
                    label: '限额管理',
                    id: 'SID0101010300',
                    items: [
                      {
                        label: '贷款规模信息管理',
                        id: 'SID0101010301',
                        // icon: [
                        //   '/pages/financial-risk/amount/creditVolumeQuery'
                        // ]
                      },
                      {
                        label: '行业用信限额管理',
                        id: 'SID0101010302',
                        // icon: [
                        //   '/pages/financial-risk/amount/industryquota'
                        // ]
                      },
                      {
                        label: '贷款品种用信限额管理',
                        id: 'SID0101010303',
                        // icon: [
                        //   '/pages/financial-risk/amount/loanLimit'
                        // ]
                      },
                      {
                        label: '机构用信限额管理',
                        id: 'SID0101010304',
                        // icon: [
                        //   '/pages/financial-risk/amount/institution'
                        // ]
                      },
                      {
                        label: '风险缓释措施限额管理',
                        id: 'SID0101010305',
                        // icon: [
                        //   '/pages/financial-risk/amount/riskLimit'
                        // ]
                      }
                    ]
                  },
                  {
                    label: '合同额度管理',
                    id: 'SID0101010400',
                    items: [
                      {
                        label: '合同额度信息查询',
                        id: 'SID0101010401',
                        // icon: [
                        //   '/pages/financial-risk/amount/contract'
                        // ]
                      },
                      {
                        label: '合同额度解冻',
                        id: 'SID0101010402',
                        // icon: [
                        //   '/pages/financial-risk/amount/contractthaw'
                        // ]
                      },
                      {
                        label: '合同额度冻结',
                        id: 'SID0101010403',
                        // icon: [
                        //   '/pages/financial-risk/amount/contractfreeze'
                        // ]
                      }
                    ]
                  },
                  {
                    label: '待办事项',
                    id: 'SID0101010500',
                    // icon: [
                    //   '/pages/financial-risk/amount/backlog'
                    // ]
                  },
                  {
                    label: '已办事项',
                    id: 'SID0101010600',
                    // icon: [
                    //   '/pages/financial-risk/amount/matters'
                    // ]
                  }
                ]
              },
              {
                label: '统一押品系统',
                id: 'SID0101020000',
                items: [
                  {
                    label: '押品信息管理',
                    id: 'SID0101020100',
                    items: [
                      {
                        label: '押品信息维护',
                        id: 'SID0101020101',
                        // icon: [
                        //   '/pages/financial-risk/collateral/regmanager'
                        // ]
                      }
                    ]
                  },
                  {
                    label: '保证人信息维护',
                    id: 'SID0101020200',
                    items: [
                      {
                        label: '保证人信息查询',
                        id: 'SID0101020201',
                        // icon: [
                        //   '/pages/financial-risk/collateral/bail'
                        // ]
                      }
                    ]
                  },
                  {
                    label: '押品评估管理',
                    id: 'SID0101020300',
                    items: [
                      {
                        label: '评估认定发起',
                        id: 'SID0101020301',
                        // icon: [
                        //   '/pages/financial-risk/collateral/estimate/apply'
                        // ]
                      },
                      {
                        label: '评估认定审批',
                        id: 'SID0101020302',
                        // icon: [
                        //   '/pages/financial-risk/collateral/estimatereview'
                        // ]
                      }
                    ]
                  },
                  {
                    label: '担保合同管理',
                    id: 'SID00010',
                    items: [
                      {
                        label: '担保合同查询',
                        // icon: [
                        //   '/pages/financial-risk/collateral/guaranteecontractquery'
                        // ]
                      },
                      {
                        label: '担保合同申请',
                        // icon: [
                        //   '/pages/financial-risk/collateral/guaranteeContract/apply'
                        // ]
                      },
                      {
                        label: '担保合同审批',
                        // icon: [
                        //   '/pages/financial-risk/collateral/guaranteeContract/approve'
                        // ]
                      },
                      {
                        label: '担保合同变更申请',
                        // icon: [
                        //   '/pages/financial-risk/collateral/guaranteecontract/change/applylist'
                        // ]
                      },
                      {
                        label: '担保合同变更审批',
                        // icon: [
                        //   '/pages/financial-risk/collateral/guaranteecontract/change/review'
                        // ]
                      }
                    ]
                  },
                  {
                    label: '押品出入库管理',
                    id: 'SID00010',
                    items: [
                      {
                        label: '押品出入库申请',
                        // icon: [
                        //   '/pages/financial-risk/collateral/storage/apply'
                        // ]
                      },
                      {
                        label: '押品出入库复核',
                        // icon: [
                        //   '/pages/financial-risk/collateral/storage/review'
                        // ]
                      }
                    ]
                  },
                  {
                    label: '押品预警管理',
                    id: 'SID00010',
                    items: [
                      {
                        label: '押品估值不足提醒',
                        // icon: [
                        //   '/pages/financial-risk/collateral/earlyWarning/undervaluationRemind'
                        // ]
                      },
                      {
                        label: '押品重估提醒',
                        // icon: [
                        //   '/pages/financial-risk/collateral/earlyWarning/revaluation'
                        // ]
                      },
                      {
                        label: '押品保险到期提醒',
                        // icon: [
                        //   '/pages/financial-risk/collateral/earlyWarning/insuranceMaturity'
                        // ]
                      },
                      {
                        label: '押品重复质押提醒',
                        // icon: [
                        //   '/pages/financial-risk/collateral/earlyWarning/duplicatePledge'
                        // ]
                      }
                    ]
                  }
                ]
              },
              {
                label: '系统管理',
                id: 'SID0101030000',
                items: [
                  {
                    label: '押品配置管理',
                    id: 'SID0101030100',
                    items: [
                      {
                        label: '押品类型配置',
                        id: 'SID0101030101',
                        // icon: [
                        //   '/pages/financial-risk/sys/genre'
                        // ]
                      },
                      {
                        label: '评估周期配置',
                        id: 'SID0101030102',
                        // icon: [
                        //   '/pages/financial-risk/sys/period'
                        // ]
                      }
                    ]
                  },
                  {
                    label: '业务单元配置管理',
                    id: 'SID0101030200',
                    items: [
                      {
                        label: '地址配置',
                        id: 'SID0101030201',
                        // icon: [
                        //   '/pages/financial-risk/sys/address'
                        // ]
                      },
                      {
                        label: '业务单元配置',
                        id: 'SID0101030202',
                        // icon: [
                        //   '/pages/financial-risk/sys/business'
                        // ]
                      }
                    ]
                  },
                  {
                    label: '估值元素配置管理',
                    id: 'SID0101030300',
                    // icon: [
                    //   '/pages/financial-risk/sys/element'
                    // ]
                  },
                  {
                    label: '估值公式配置管理',
                    id: 'SID0101030400',
                    //   icon: [
                    //                   //     '/pages/financial-risk/sys/formula'
                    //                   //   ]
                  }
                ]
              }
            ]
          },
          {
            label: '信贷管理',
            id: 'SID0102000000',
            items: [
              {
                label: '授信申请',
                id: 'SID0102010000',
                // icon: [
                //   '/pages/bank-credit/credit-manage/apply/query'
                // ]
              },
              {
                label: '用信申请',
                id: 'SID0102020000',
                // icon: [
                //   '/pages/bank-credit/credit-manage/credit-manage-useApply/useApply-query'
                // ]
              },
              {
                label: '放款申请',
                id: 'SID0102030000',
                // icon: [
                //   '/pages/bank-credit/credit-manage/credit-manage-loan-apply/loan-apply'
                // ]
              },
              {
                label: '合作方额度申请',
                id: 'SID0102040000',
                // icon: [
                //   '/pages/bank-credit/credit-manage/credit-manage-partner/detailsInfo-base'
                // ]
              },
              {
                label: '客户管理',
                id: 'SID0102050000',
                items: [
                  {
                    label: '零售客户管理',
                    id: 'SID0102050100',
                    // icon: [
                    //   '/pages/bank-credit/credit-custom/credit-custom-management'
                    // ]
                  },
                  {
                    label: '对公客户管理',
                    id: 'SID0102050200',
                    // icon: [
                    //   '/pages/bank-credit/credit-custom/credit-custom-public'
                    // ]
                  },
                  {
                    label: '同业客户管理',
                    id: 'SID0102050300',
                    // icon: [
                    //   '/pages/bank-credit/credit-custom/trade'
                    // ]
                  },
                  {
                    label: '合作方客户管理',
                    id: 'SID0102050400',
                    // icon: [
                    //   '/pages/bank-credit/credit-custom/customPartner'
                    // ]
                  },
                  {
                    label: '名单制客户管理',
                    id: 'SID0102050500',
                    // icon: [
                    //   '/pages/bank-credit/credit-custom/list-system'
                    // ]
                  },
                  {
                    label: '集群客户管理',
                    id: 'SID0102050600',
                    // icon: [
                    //   '/pages/bank-credit/credit-custom/credit-custom-colony'
                    // ]
                  },
                  {
                    label: '客户管理工具',
                    id: 'SID0102050700',
                    // icon: [
                    //   '/pages/bank-credit/credit-custom/credit-custom-tool'
                    // ]
                  },
                  {
                    label: '集团客户管理',
                    id: 'SID0102050800',
                    // icon: [
                    //   '/pages/bank-credit/credit-custom/group'
                    // ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        label: '财务管理',
        id: 'SID0200000000',
        items: [
          {
            label: '贷后管理',
            id: 'SID0201000000',
            items: [
              {
                label: '催收管理',
                id: 'SID0201010000',
                // icon: [
                //   '/pages/accounting/postlending/collection'
                // ]
              },
              {
                label: '贷后检查',
                id: 'SID0201020000',
                // icon: [
                //   '/pages/accounting/postlending/postloaninspec'
                // ]
              },
              {
                label: '借据信息管理',
                id: 'SID0201030000',
                // icon: [
                //   '/pages/accounting/postlending/messagemanager'
                // ]
              },
              {
                label: '五级分类',
                id: 'SID0201040000',
                // icon: [
                //   '/pages/accounting/postlending/fivelevel'
                // ]
              },
              {
                label: '资产保全',
                id: 'SID0201050000',
                // icon: [
                //   '/pages/accounting/postlending/assetpreserve'
                // ]
              },
              {
                label: '拨备计提管理',
                id: 'SID0201060000',
                // icon: [
                //   '/pages/accounting/postlending/provision'
                // ]
              },
              {
                label: '风险预警管理',
                id: 'SID0201070000',
                // icon: [
                //   '/pages/accounting/postlending/riskwarn'
                // ]
              },
              {
                label: '参数设置',
                id: 'SID0201080000',
                // icon: [
                //   '/pages/accounting/postlending/paramset'
                // ]
              }
            ]
          },
          {
            label: '会计核算',
            id: 'SID0110000000',
            items: [
              {
                label: '会计交易查询',
                id: 'SID0103000000',
                // icon: [
                //   '/pages/fdm-page/transaction'
                // ]
              },
              {
                label: '基础数据配置',
                id: 'SID0103000000',
                // icon: [
                //   '/pages/fdm-page/homepage'
                // ]
              }
            ]
          }
        ]
      },
      {
        label: '安全平台管理',
        id: 'SID0300000000',
        items: [

          {
            label: '角色管理',
            id: 'SID0300100000',
            // icon: [
            //   '/pages/basic-manage/role-manage'
            // ]
          },
          {
            label: '岗位管理',
            id: 'SID0300200000',
            // icon: [
            //   '/pages/basic-manage/posts-manage'
            // ]
          },
          {
            label: '权限管理',
            id: 'SID0300300000',
            // icon: [
            //   '/pages/basic-manage/power-manage'
            // ]
          },
          {
            label: '机构管理',
            id: 'SID0300400000',
            // icon: [
            //   '/pages/basic-manage/org-manage'
            // ]
          },
          {
            label: '用户管理',
            id: 'SID0300500000',
            // icon: [
            //   '/pages/basic-manage/user-manage'
            // ]
          },
          {
            label: '机构岗位人员管理',
            id: 'SID0300600000',
            // icon: [
            //   '/pages/basic-manage/party-relation'
            // ]
          },
          {
            label: '机构岗位角色管理',
            id: 'SID0300700000',
            // icon: [
            //   '/pages/basic-manage/party-role'
            // ]
          },
          {
            label: '机构岗位管理',
            id: 'SID0300800000',
            // icon: [
            //   '/pages/basic-manage/party-together'
            // ]
          },
          {
            label: '机构IP管理',
            id: 'SID0300900000',
            // icon: [
            //   '/pages/basic-manage/org-ip-manage'
            // ]
          },
          {
            label: '菜单管理',
            id: 'SID0301000000',
            // icon: [
            //   '/pages/basic-manage/menu-manage'
            // ]
          },
          {
            label: '密码策略管理',
            id: 'SID0301100000',
            // icon: [
            //   '/pages/basic-manage/password-strategy'
            // ]
          },
          {
            label: '登录方式管理',
            id: 'SID0301200000',
            // icon: [
            //   '/pages/basic-manage/login-type'
            // ]
          },
          {
            label: '登录日志查询',
            id: 'SID0301300000',
            // icon: [
            //   '/pages/basic-manage/login-log'
            // ]
          },
          {
            label: '当日操作日志查询',
            id: 'SID0301400000',
            // icon: [
            //   '/pages/basic-manage/operate-log'
            // ]
          },
          {
            label: '权限资源维护',
            id: 'SID0301500000',
            // icon: [
            //   '/pages/basic-manage/permissions-source'
            // ]
          },
          {
            label: '用户登录验证方式管理',
            id: 'SID0301600000',
            // icon: [
            //   '/pages/basic-manage/user-login-sys'
            // ]
          },
          {
            id: 'SID0301700000',
            label: '用户-授权用户关系维护',
            // icon: [
            //   '/pages/basic-manage/user-auth-manage'
            // ]
          },
          {
            label: '接入系统维护',
            id: 'SID0301800000',
            // icon: [
            //   '/pages/basic-manage/access-system-info'
            // ]
          },
          {
            label: '子系统维护',
            id: 'SID0301900000',
            // icon: [
            //   '/pages/basic-manage/sec-sub-system-info'
            // ]
          },
          {
            label: '子系统交易信息维护',
            id: 'SID0302000000',
            // icon: [
            //   '/pages/basic-manage/sec-sub-system-server-info'
            // ]
          },
          {
            label: '系统授权',
            id: 'SID0302100000',
            // icon: [
            //   '/pages/basic-manage/system-together'
            // ]
          },
          {
            label: '加密机指令模板配置',
            id: 'SID0302200000',
            // icon: [
            //   '/pages/basic-manage/secret/secret-order-config'
            // ]
          },
          {
            label: '加密机资源管理',
            id: 'SID0302300000',
            // icon: [
            //   '/pages/basic-manage/secret/secret-source-manage'
            // ]
          }
        ]
      },
      {
        label: '交易中心管理',
        items: [
          {
            label: '计价管理',
            items: [
              {
                label: '利率',
                // icon: [
                //   '/pages/tradeCenter/price/price-interest/preferentia-rules/rules-add/add-preferentiadata'
                // ]
              },
              {
                label: '费率',
                // icon: [
                //   '/pages/tradeCenter/price/price-vary/maintenance-basic-rate/rate-add'
                // ]
              },
              {
                label: '工具',
                // icon: [
                //   '/pages/tradeCenter/price/price-tools/person-deposit-trial'
                // ]
              },
              {
                label: '汇率',
                // icon: [
                //   '/pages/tradeCenter/price/price-exchange/exch-main'
                // ]
              },
              {
                label: '税率',
                // icon: [
                //   '/pages/tradeCenter/price/price-tax/tax-main'
                // ]
              },
              {
                label: '查询',
                // icon: [
                //   '/pages/tradeCenter/price/price-query/charg-query/charg-list'
                // ]
              },
              {
                label: '收货管理',
                // icon: [
                //   '/pages/tradeCenter/price/price-rece-manage/due-fee'
                // ]
              }
            ]
          },
          {
            label: '方案报价',
            items: [
              {
                label: '潜在请求',
                // icon: [
                //   '/pages/tradeCenter/order/deal-center/scheme-price/potential-request/custom-communicate'
                // ]
              },
              {
                label: '方案维护',
                // icon: [
                //   '/pages/tradeCenter/order/deal-center/scheme-price/scheme-maintain/scheme-look'
                // ]
              },
              {
                label: '报价维护',
                // icon: [
                //   '/pages/tradeCenter/order/deal-center/scheme-price/price-maintain/price-look'
                // ]
              }
            ]
          },
          {
            label: '订单执行',
            items: [
              {
                label: '当日销售订单',
                items: [
                  {
                    label: '当日订单',
                    // icon: [
                    //   '/pages/tradeCenter/order/deal-center/order-execute/day-sale-order/day-order'
                    // ]
                  },
                  {
                    label: '当日热销',
                    // icon: [
                    //   '/pages/tradeCenter/order/deal-center/order-execute/day-sale-order/day-sale'
                    // ]
                  }
                ]
              },
              {
                label: '销售订单维护',
                items: [
                  {
                    label: '筛查列表',
                    //     icon: [
                    //       '/pages/tradeCenter/order/deal-center/order-execute/sale-order-maintain/screen-list'
                    // ]
                  },
                  {
                    label: '高级查询',
                    // icon: [
                    //   '/pages/tradeCenter/order/deal-center/order-execute/sale-order-maintain/advanced-search'
                    // ]
                  },
                  {
                    label: '订单详情',
                    // icon: [
                    //   '/pages/tradeCenter/order/deal-center/order-execute/sale-order-maintain/order-detail'
                    // ]
                  }
                ]
              },
              {
                label: '订单录入',
                // icon: [
                //   '/pages/tradeCenter/order/deal-center/order-execute/sale-order-enter/order-enter'
                // ]
              }
            ]
          },
          {
            label: '需求采购',
            items: [
              {
                label: '采购订单维护',
                items: [
                  {
                    label: '筛查列表',
                    // icon: [
                    //   '/pages/tradeCenter/order/deal-center/order-execute/purchase-order-maintain/screen-list'
                    // ]
                  },
                  {
                    label: '订单详情',
                    // icon: [
                    //   '/pages/tradeCenter/order/deal-center/order-execute/purchase-order-maintain/purchase-order-detail'
                    // ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        label: '产品中心管理',
        items: [
          {
            label: '产品配置',
            items: [
              {
                label: '产品目录',
                items: [
                  {
                    label: '全局目录',
                    // icon: [
                    //   '/pages/product/product-catalog/global-directory'
                    // ]
                  },
                  {
                    label: '产品线维护',
                    // icon: [
                    //   '/pages/product/product-catalog/product-line'
                    // ]
                  },
                  {
                    label: '产品组维护',
                    // icon: [
                    //   '/pages/product/product-catalog/product-group'
                    // ]
                  },
                  {
                    label: '业务目录配置',
                    // icon: [
                    //   '/pages/product/product-catalog/business-directory'
                    // ]
                  }
                ]
              },
              {
                label: '基础产品',
                items: [
                  {
                    label: '基础产品管理',
                    // icon: [
                    //   '/pages/product/basic-product/basic-product-view'
                    // ]
                  }
                ]
              },
              {
                label: '可售产品',
                items: [
                  {
                    label: '可售产品管理',
                    // icon: [
                    //   '/pages/product/sale-product/sale-product-view'
                    // ]
                  }
                ]
              },
              {
                label: '产品组件',
                items: [
                  {
                    label: '组件配置',
                    // icon: [
                    //   '/pages/product/component-manage/component-view'
                    // ]
                  },
                  {
                    label: '矩阵管理',
                    // icon: [
                    //   '/pages/product/component-manage/matrix'
                    // ]
                  },
                  {
                    label: '矩阵关联产品',
                    // icon: [
                    //   '/pages/product/component-manage/prod-matrrx-relation'
                    // ]
                  }
                ]
              },
              {
                label: '产品套餐',
                items: [
                  {
                    label: '套餐配置',
                    // icon: [
                    //   '/pages/product/product-package/package-admin'
                    // ]
                  }
                ]
              },
              {
                label: '组合产品模板',
                items: [
                  {
                    label: '组合产品模板管理',
                    // icon: [
                    //   '/pages/product/assemble-product-template/assemble-product-template-view'
                    // ]
                  }
                ]
              },
              {
                label: '组合产品',
                items: [
                  {
                    label: '组合产品管理',
                    // icon: [
                    //   '/pages/product/assemble-product/assemble-product-view'
                    // ]
                  }
                ]
              },
              {
                label: '产品功能',
                items: [
                  {
                    label: '产品功能属性',
                    // icon: [
                    //   ''
                    // ]
                  },
                  {
                    label: '支付工具',
                    // icon: [
                    //   '/pages/product/function-manage/payment-config'
                    // ]
                  },
                  {
                    label: '功能配置',
                    // icon: [
                    //   '/pages/product/function-manage/function-config'
                    // ]
                  },
                  {
                    label: '交付配置',
                    // icon: [
                    //   '/pages/product/function-manage/delivery-config'
                    // ]
                  }
                ]
              },
              {
                label: '产品关系',
                items: [
                  {
                    label: '产品关系管理',
                    // icon: [
                    //   '/pages/product/product-relationship/product-relationship-config'
                    // ]
                  }
                ]
              },
              {
                label: '调查管理',
                items: [
                  {
                    label: '创建调查',
                    // icon: [
                    //   '/pages/product/survey-manage/create-survey-config'
                    // ]
                  },
                  {
                    label: '调查项管理',
                    // icon: [
                    //   '/pages/product/survey-manage/create-survey-config-uration-detail'
                    // ]
                  },
                  {
                    label: '关联调查',
                    // icon: [
                    //   '/pages/product/survey-manage/associated-survey-config'
                    // ]
                  },
                  {
                    label: '调查导入',
                    // icon: [
                    //   '/pages/product/survey-manage/export-survey-config'
                    // ]
                  }
                ]
              },
              {
                label: '物料货运',
                items: [
                  {
                    label: '产品货运',
                    // icon: [
                    //   '/pages/product/freight-site/product-freight-config'
                    // ]
                  },
                  {
                    label: '渠道货运',
                    // icon: [
                    //   '/pages/product/freight-site/channel-freight-config'
                    // ]
                  },
                  {
                    label: '物料关联',
                    // icon: [
                    //   '/pages/product/freight-site/materials-product'
                    // ]
                  },
                  {
                    label: '非可售物料产品管理',
                    // icon: [
                    //   '/pages/product/freight-site/nosale-product'
                    // ]
                  }
                ]
              },
              {
                label: '产品促销',
                items: [
                  {
                    label: '产品促销',
                    // icon: [
                    //   '/pages/product/product-promotion/product-promotion-view'
                    // ]
                  }
                ]
              }
            ]
          },
          {
            label: '产品面市',
            items: [
              {
                label: '渠道站点',
                items: [
                  {
                    label: '站点配置',
                    // icon: [
                    //   '/pages/product/product-interview/site-config'
                    // ]
                  },
                  {
                    label: '渠道配置',
                    // icon: [
                    //   '/pages/product/product-interview/channel-config'
                    // ]
                  }
                ]
              },
              {
                label: '营业店面',
                items: [
                  {
                    label: '店铺配置',
                    // icon: [
                    //   '/pages/product/product-interview/business-store'
                    // ]
                  }
                ]
              },
              {
                label: '市场投放',
                items: [
                  {
                    label: '渠道投放',
                    // icon: [
                    //   '/pages/product/product-interview/market-launch/channel-delivery'
                    // ]
                  },
                  {
                    label: '投放详情',
                    // icon: [
                    //   '/pages/product/product-interview/market-launch/product-delivery'
                    // ]
                  }
                ]
              },
              {
                label: '产品导出',
                // icon: [
                //   '/pages/product/product-interview/product-export'
                // ]
              }
            ]
          }
        ]
      },
      {
        label: '库存管理',
        id: 'SID0600000000',
        items: [
          {
            label: '现金管理',
            id: 'SID0601000000',
            items: [
              {
                label: '现金解缴',
                id: 'SID0601010000',
                // icon: [
                //   '/pages/inventory-control/cash/cash-payment'
                // ]
              },
              {
                label: '库间调拨',
                id: 'SID0601020000',
                // icon: [
                //   '/pages/inventory-control/cash/library-transfer'
                // ]
              }
            ]
          },
          {
            label: '凭证管理',
            id: 'SID0602000000',
            items: [
              {
                label: '库存管理',
                id: 'SID0602010000',
                // icon: [
                //   '/pages/inventory-control/voucher/inventory/management'
                // ]
              },
              {
                label: '库间调拨',
                id: 'SID0602020000',
                // icon: [
                //   '/pages/inventory-control/voucher/storageAllocation/allocation'
                // ]
              }
            ]
          },
          {
            label: '卡管理',
            id: 'SID0603000000',
            items: [
              {
                label: '卡出入库',
                id: 'SID0603010000',
                // icon: [
                //   '/pages/inventory-control/voucher/cardStorage'
                // ]
              },
              {
                label: '卡库间调拨',
                id: 'SID0603020000',
                // icon: [
                //   '/pages/inventory-control/voucher/cardAllocation'
                // ]
              },
              {
                label: '卡查询',
                id: 'SID0603030000',
                // icon: [
                //   '/pages/inventory-control/voucher/cardInquire'
                // ]
              }
            ]
          }
        ]
      },
      {
        label: '机构管理',
        id: 'SID0700000000',
        items: [
          {
            label: '机构信息新增',
            id: 'SID0700100000',
            // icon: [
            //   'pages/resource/organization/organization-manage/organization-create'
            // ]
          },
          {
            label: '机构信息维护',
            id: 'SID0700200000',
            // icon: [
            //   '/pages/resource/organization/organization-manage/organization-maintenance'
            // ]
          },
          {
            label: '机构信息撤并',
            id: 'SID0700300000',
            // icon: [
            //   '/pages/resource/organization/organization-manage/organization-revocation'
            // ]
          },
          {
            label: '机构信息快捷维护',
            id: 'SID0700400000',
            // icon: [
            //   '/pages/resource/organization/organization-manage/quick-maintenance'
            // ]
          },
          {
            label: '机构信息树查询',
            id: 'SID0700500000',
            // icon: [
            //   '/pages/resource/organization/orga-infomation/tree-query'
            // ]
          },
          {
            label: '机构历史信息查询',
            id: 'SID0700600000',
            // icon: [
            //   '/pages/resource/organization/orga-infomation/history-query'
            // ]
          },
          {
            label: '机构自定义信息查询',
            id: 'SID0700700000',
            // icon: [
            //   '/pages/resource/organization/orga-infomation/information-query'
            // ]
          },
          {
            label: '机构模型管理',
            id: 'SID0700800000',
            // icon: [
            //   '/pages/resource/organization/model-man/model-property'
            // ]
          },
          {
            label: '机构类型管理',
            id: 'SID0700900000',
            // icon: [
            //   '/pages/resource/organization/model-man/organization-type'
            // ]
          },
          {
            label: '机构体系管理',
            id: 'SID0701000000',
            // icon: [
            //   '/pages/resource/organization/model-man/institutional-system'
            // ]
          },
          {
            label: '角色类型管理',
            id: 'SID0701100000',
            // icon: [
            //   '/pages/resource/organization/model-man/role-type'
            // ]
          },
          {
            label: '关系类型管理',
            id: 'SID0701200000',
            // icon: [
            //   '/pages/resource/organization/model-man/relationship-type'
            // ]
          },
          {
            label: '机构模型码表维护',
            id: 'SID0701300000',
            // icon: [
            //   '/pages/resource/organization/model-man/code-table'
            // ]
          }
        ]
      },
      {
        label: '客户管理',
        id: 'SID0800000000',
        items: [
          {
            label: '客户联系',
            // icon: [
            //   '/pages/custom/custom-marketing/cus-contact'
            // ],
            id: 'SID0801000000'
          },
          {
            label: '潜在客户管理',
            // icon: [
            //   '/pages/custom/custom-marketing/cus-potential'
            // ],
            id: 'SID0802000000'
          },
          {
            label: '自选客户群组',
            // icon: [
            //   '/pages/custom/custom-marketing/group'
            // ],
            id: 'SID0803000000'
          },
          {
            label: '客户申领',
            // icon: [
            //   '/pages/custom/custom-marketing/cus-apply/custom-manager'
            // ],
            id: 'SID0804000000'
          },
          {
            label: '客户转让',
            // icon: [
            //   '/pages/custom/custom-marketing/cus-transfer/account-manager'
            // ],
            id: 'SID0805000000'
          },
          {
            label: '客户分配',
            // icon: [
            //   '/pages/custom/custom-marketing/cus-allot'
            // ],
            id: 'SID0806000000'
          },
          {
            label: '客户代管',
            // icon: [
            //   '/pages/custom/custom-marketing/cus-escrow/escrow-account-manager'
            // ],
            id: 'SID0807000000'
          },
          {
            label: '客户开立',
            // icon: [
            //   '/pages/custom/custom-marketing/cus-open/corporate-customer'
            // ],
            id: 'SID0808000000'
          },
          {
            label: '基础管理',
            id: 'SID0809000000',
            items: [
              {
                label: '节假日管理',
                id: 'SID0809010000',
                // icon: [
                //   '/pages/custom/basics-management/holiday'
                // ]
              },
              {
                label: '功能排序查询',
                id: 'SID0809020000',
                // icon: [
                //   '/pages/custom/basics-management/function-sorting'
                // ]
              },
              {
                label: '短信模板查询',
                id: 'SID0809030000',
                // icon: [
                //   '/pages/custom/basics-management/sms-template'
                // ]
              },
              {
                label: '管理工具 ',
                id: 'SID0809040000',
                // icon: [
                //   '/pages/custom/basics-management/managent-tool'
                // ]
              },
              {
                label: '功能搜索 ',
                id: 'SID0809050000',
                // icon: [
                //   '/pages/custom/basics-management/function-search'
                // ]
              }
            ]
          },
          {
            label: '工作任务',
            id: 'SID0810000000',
            items: [
              {
                label: '信贷综合岗界面',
                id: 'SID0810010000',
                // icon: [
                //   '/pages/custom/work-rask/credit-intergration'
                // ]
              },
              {
                label: '信贷业务申请登记',
                id: 'SID0810020000',
                // icon: [
                //   '/pages/custom/work-rask/credit-apply'
                // ]
              },
              {
                label: '员工关系管理界面',
                id: 'SID0810030000',
                // icon: [
                //   '/pages/custom/work-rask/staff-relation'
                // ]
              }
            ]
          }
        ]
      },
      {
        label: '系统功能优化',
        id: 'SID0900000000',
        items: [
          {
            label: '管理员界面',
            id: 'SID0901000000',
            // icon: [
            //   '/pages/other/system-function/manager'
            // ]
          },
          {
            label: '用户查看优化建议历史列表',
            id: 'SID0902000000',
            // icon: [
            //   '/pages/other/system-function/user'
            // ]
          },
          {
            label: '评论页',
            id: 'SID0903000000',
            // icon: [
            //   '/pages/other/system-function/comment'
            // ]
          }
        ]
      },
      {
        label: '营销',
        id: 'SID0904000000',
        items: [
          {
            label: '创建营销活动',
            id: 'SID0904010000',
            // icon: [
            //   '/pages/custom/marketing/creat-marketing'
            // ]
          },
          {
            label: '筛选客户模板管理',
            id: 'SID0904020000',
            // icon: [
            //   '/pages/custom/marketing/filter-custom'
            // ]
          },
          {
            label: '目标客户探索',
            id: 'SID0904030000',
            // icon: [
            //   '/pages/custom/marketing/new-object'
            // ]
          },
          {
            label: '营销活动管理',
            id: 'SID0904040000',
            // icon: [
            //   '/pages/custom/marketing/marketing-manage'
            // ]
          },
          {
            label: '转推介',
            id: 'SID0904050000',
            items: [
              {
                label: '转推介查询',
                id: 'SID0904050100',
                // icon: [
                //   '/pages/custom/marketing/referral'
                // ]
              },
              {
                label: '营销转推介处理',
                id: 'SID0904050200',
                // icon: [
                //   '/pages/custom/marketing/referral-deal-with'
                // ]
              },
              {
                label: '过度营销控制',
                id: 'SID0904050300',
                // icon: [
                //   '/pages/custom/marketing/over-marketing'
                // ]
              }
            ]
          },
          {
            label: '客户活动进展查询',
            id: 'SID0904060000',
            // icon: [
            //   '/pages/custom/marketing/custom-progress'
            // ]
          },
          {
            label: '机构活动进展查询',
            id: 'SID0904070000',
            // icon: [
            //   '/pages/custom/marketing/org-progress'
            // ]
          },
          {
            label: '客户经理活动进展查询',
            id: 'SID0904080000',
            // icon: [
            //   '/pages/custom/marketing/custom-manager-progress'
            // ]
          },
          {
            label: '模型超市',
            id: 'SID0904090000',
            // icon: [
            //   '/pages/custom/marketing/model-store'
            // ]
          },
          {
            label: '我的营销',
            id: 'SID0904100000',
            // icon: [
            //   '/pages/custom/marketing/my-marketing'
            // ]
          }
        ]
      },
      {
        label: '产品中心',
        id: 'SID0905000000',
        items: [
          {
            label: '产品树展示',
            id: 'SID0905010000',
            // icon: [
            //   '/pages/custom/custom-pro'
            // ]
          },
          {
            label: '产品介绍',
            id: 'SID0905020000',
            // icon: [
            //   '/pages/custom/custom-pro/proDetail'
            // ]
          },
          {
            label: '可售产品详情',
            id: 'SID0905030000',
            items: [
              {
                label: '产品概览',
                id: 'SID0905030100',
                // icon: [
                //   '/pages/custom/custom-pro/over-view'
                // ]
              },
              {
                label: '产品说明书',
                id: 'SID0905030200',
                // icon: [
                //   '/pages/custom/custom-pro/instruction-book'
                // ]
              },
              {
                label: '业务办理规定',
                id: 'SID0905030300',
                // icon: [
                //   '/pages/custom/custom-pro/stipulate'
                // ]
              },
              {
                label: '营销话术',
                id: 'SID0905030400',
                // icon: [
                //   '/pages/custom/custom-pro/marketing'
                // ]
              },
              {
                label: '促销活动',
                id: 'SID0905030500',
                // icon: [
                //   '/pages/custom/custom-pro/promotion'
                // ],
                items: [
                  {
                    label: '促销活动详情',
                    id: 'SID0905030501',
                    // icon: [
                    //   '/pages/custom/custom-pro/promotion-detail'
                    // ]
                  },
                  {
                    label: '促销活动新增',
                    id: 'SID0905030502',
                    // icon: [
                    //   '/pages/custom/custom-pro/promotion-add'
                    // ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        label: '工作报表',
        id: 'SID0906000000',
        items: [
          {
            label: '工作任务处理报表(机构)',
            id: 'SID0906010000',
            // icon: [
            //   '/pages/custom/work-report/report-organization'
            // ]
          },
          {
            label: '工作任务处理报表(员工)',
            id: 'SID0906020000',
            // icon: [
            //   '/pages/custom/work-report/report-staff'
            // ]
          },
          {
            label: '客户联系报表(机构)',
            id: 'SID0906030000',
            // icon: [
            //   '/pages/custom/work-report/contact-sheet-organization'
            // ]
          },
          {
            label: '客户联系报表(员工)',
            id: 'SID0906040000',
            // icon: [
            //   '/pages/custom/work-report/contact-sheet-staff'
            // ]
          }
        ]
      },
      {
        label: '产品平台2.0',
        id: 'SID0907000000',
        items: [
          {
            label: '产品配置',
            id: 'SID0907010000',
            items: [
              {
                label: '产品目录',
                id: 'SID0907010100',
                items: [
                  {
                    label: '全局目录',
                    id: 'SID0907010101',
                    // icon: [
                    //   '/pages/product/product-catalog/global-directory'
                    // ]
                  },
                  {
                    label: '产品线维护',
                    id: 'SID0907010102',
                    // icon: [
                    //   '/pages/product/product-catalog/product-line'
                    // ]
                  },
                  {
                    label: '产品组维护',
                    id: 'SID0907010103',
                    // icon: [
                    //   '/pages/product/product-catalog/product-group'
                    // ]
                  },
                  {
                    label: '业务目录配置',
                    id: 'SID0907010104',
                    // icon: [
                    //   '/pages/product/product-catalog/business-directory'
                    // ]
                  }
                ]
              },
              {
                label: '基础产品',
                id: 'SID0907010200',
                items: [
                  {
                    label: '基础产品管理',
                    id: 'SID0907010201',
                    // icon: [
                    //   '/pages/product/basic-product/basic-product-view'
                    // ]
                  }
                ]
              },
              {
                label: '可售产品',
                id: 'SID0907010300',
                items: [
                  {
                    label: '可售产品管理',
                    id: 'SID0907010301',
                    // icon: [
                    //   '/pages/product/sale-product/sale-product-view'
                    // ]
                  }
                ]
              },
              {
                label: '产品组件',
                id: 'SID0907010400',
                items: [
                  {
                    label: '组件配置',
                    id: 'SID0907010401',
                    // icon: [
                    //   '/pages/product/component-manage/component-view'
                    // ]
                  }
                ]
              },
              {
                label: '产品套餐',
                id: 'SID0907010500',
                items: [
                  {
                    label: '套餐管理',
                    id: 'SID0907010501',
                    // icon: [
                    //   '/pages/product/product-package/package-admin'
                    // ]
                  }
                ]
              },
              {
                label: '产品组合',
                id: 'SID0907010600',
                items: [
                  {
                    label: '产品组合模板',
                    id: 'SID0907010601',
                    items: [
                      {
                        label: '模板配置',
                        id: 'SID0907010601a',
                        // icon: [
                        //   '/pages/product/product-mix/product-mix-template'
                        // ]
                      },
                      {
                        label: '模板维护',
                        id: 'SID0907010601b'
                      },
                      {
                        label: '模板标签',
                        id: 'SID0907010601c'
                      }
                    ]
                  },
                  {
                    label: '组合产品',
                    id: 'SID0907010602',
                    items: [
                      {
                        label: '产品配置',
                        id: 'SID0907010602a',
                        // icon: [
                        //   '/pages/product/product-mix/composite-product'
                        // ]
                      },
                      {
                        label: '产品维护',
                        id: 'SID0907010602b'
                      },
                      {
                        label: '模板标签',
                        id: 'SID0907010602c'
                      }
                    ]
                  }
                ]
              },
              {
                label: '产品功能',
                id: 'SID0907010603',
                items: [
                  {
                    label: '功能配置',
                    id: 'SID0907010603a',
                    // icon: [
                    //   '/pages/product/function-manage/function-config'
                    // ]
                  },
                  {
                    label: '交付配置',
                    id: 'SID0907010603b',
                    // icon: [
                    //   '/pages/product/function-manage/delivery-config'
                    // ]
                  }
                ]
              },
              {
                label: '产品关系',
                id: 'SID0907010604',
                items: [
                  {
                    label: '产品关系管理',
                    id: 'SID0907010604a',
                    // icon: [
                    //   '/pages/product/product-relationship/product-relationship-config'
                    // ]
                  }
                ]
              }
            ]
          },
          {
            label: '产品面市',
            id: 'SID0907010605',
            items: [
              {
                label: '渠道站点',
                id: 'SID0907010605a',
                items: [
                  {
                    label: '站点配置',
                    id: 'SID0907010605a1',
                    // icon: [
                    //   '/pages/product/product-interview/site-config'
                    // ]
                  }
                ]
              },
              {
                label: '营业店面',
                id: 'SID0907010605b',
                items: [
                  {
                    label: '店铺配置',
                    id: 'SID0907010605b1',
                    // icon: [
                    //   '/pages/product/product-interview/business-store'
                    // ]
                  }
                ]
              },
              {
                label: '市场投放',
                id: 'SID0907010605c',
                items: [
                  {
                    label: '渠道投放',
                    id: 'SID0907010605c1',
                    // icon: [
                    //   '/pages/product/product-interview/market-launch/channel-delivery'
                    // ]
                  },
                  {
                    label: '产品投放',
                    id: 'SID0907010605c2',
                    // icon: [
                    //   '/pages/product/product-interview/market-launch/product-delivery'
                    // ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        label: 'BIP平台',
        id: 'SID0908000000',
        items: [
          {
            label: 'BIP安全平台',
            id: 'SID0908010000',
            items: [
              {
                label: '安全管理',
                id: 'SID0908010100',
                items: [
                  {
                    label: '配置系统功能',
                    id: 'SID0908010101',
                    // icon: [
                    //   '/pages/manage-platform/security-manage/sys'
                    // ]
                  },
                  {
                    label: '用户权限管理',
                    id: 'SID0908010102',
                    items: [
                      {
                        label: '配置用户数据权限',
                        id: 'SID0908010102a',
                        // icon: [
                        //   '/pages/manage-platform/security-manage/user-list'
                        // ]
                      },
                      {
                        label: '配置复核人',
                        id: 'SID0908010102b',
                        // icon: [
                        //   '/pages/manage-platform/security-manage/review-user'
                        // ]
                      }
                    ]
                  },
                  {
                    label: '审计管理',
                    id: 'SID0908010103',
                    items: [
                      {
                        label: '查询操作日志',
                        id: 'SID0908010103a',
                        // icon: [
                        //   '/pages/manage-platform/security-manage/operate-trace-list'
                        // ]
                      },
                      {
                        label: '查询登录日志',
                        id: 'SID0908010103b',
                        // icon: [
                        //   '/pages/manage-platform/security-manage/login-trace-list'
                        // ]
                      }
                    ]
                  },
                  {
                    label: '复核',
                    id: 'SID0908010104',
                    // icon: [
                    //   '/pages/manage-platform/security-manage/review-list'
                    // ]
                  },
                  {
                    label: '复核记录',
                    id: 'SID0908010105',
                    // icon: [
                    //   '/pages/manage-platform/security-manage/review-record'
                    // ]
                  }
                ]
              },
              {
                label: '系统管理',
                id: 'SID0908010200',
                items: [
                  {
                    label: '运行环境管理',
                    id: 'SID0908010201',
                    items: [
                      {
                        label: '配置应用实例组',
                        id: 'SID0908010201a',
                        // icon: [
                        //   '/pages/manage-platform/system-manage/app-ins-group-list'
                        // ]
                      },
                      {
                        label: '配置应用实例',
                        id: 'SID0908010201b',
                        // icon: [
                        //   '/pages/manage-platform/system-manage/app-ins-list'
                        // ]
                      },
                      {
                        label: '配置应用系统',
                        id: 'SID0908010201c',
                        // icon: [
                        //   '/pages/manage-platform/system-manage/application-system-list'
                        // ]
                      },
                      {
                        label: '配置服务器节点',
                        id: 'SID0908010201d',
                        // icon: [
                        //   '/pages/manage-platform/system-manage/server-node-list'
                        // ]
                      },
                      {
                        label: '配置外围系统',
                        id: 'SID0908010201e',
                        // icon: [
                        //   '/pages/manage-platform/system-manage/foreign-system-list'
                        // ]
                      }
                    ]
                  },
                  {
                    label: '组合服务引擎管理',
                    id: 'SID0908010202',
                    items: [
                      {
                        label: '配置联机服务引擎',
                        id: 'SID0908010202a',
                        // icon: [
                        //   '/pages/manage-platform/system-manage/online-service-engine'
                        // ]
                      },
                      {
                        label: '路由管理',
                        id: 'SID0908010202b',
                        items: [
                          {
                            label: '配置路由规则',
                            id: 'SID0908010202b01',
                            // icon: [
                            //   '/pages/manage-platform/system-manage/route-config-rules'
                            // ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    label: '通用参数管理',
                    id: 'SID0908010203',
                    items: [
                      {
                        label: '参数分组',
                        id: 'SID0908010203a',
                        // icon: [
                        //   '404'
                        // ]
                      },
                      {
                        label: '配置数据参数',
                        id: 'SID0908010203b',
                        // icon: [
                        //   '404'
                        // ]
                      },
                      {
                        label: '维护缓存信息',
                        id: 'SID0908010203c',
                        // icon: [
                        //   '404'
                        // ]
                      },
                      {
                        label: '查询返回码',
                        id: 'SID0908010203d',
                        // icon: [
                        //   '404'
                        // ]
                      },
                      {
                        label: '日志配置',
                        id: 'SID0908010203e',
                        // icon: [
                        //   '404'
                        // ]
                      }
                    ]
                  },
                  {
                    label: '批量引擎管理',
                    id: 'SID0908010204',
                    items: [
                      {
                        label: '配置作业引擎',
                        id: 'SID0908010204a',
                        // icon: [
                        //   '404'
                        // ]
                      }
                    ]
                  },
                  {
                    label: '通知管理',
                    id: 'SID0908010205',
                    items: [
                      {
                        label: '查询通知记录',
                        id: 'SID0908010205a',
                        // icon: [
                        //   '404'
                        // ]
                      },
                      {
                        label: '查询通知任务',
                        id: 'SID0908010205b',
                        // icon: [
                        //   '404'
                        // ]
                      }
                    ]
                  },
                  {
                    label: '流水表切表管理',
                    id: 'SID0908010206',
                    // icon: [
                    //   '/pages/manage-platform/system-manage/flow-table'
                    // ]
                  },
                  {
                    label: '系统配置参数维护',
                    id: 'SID0908010207',
                    items: [
                      {
                        label: '系统配置参数维护',
                        id: 'SID0908010207a',
                        // icon: [
                        //   '/pages/manage-platform/system-manage/platform-setting'
                        // ]
                      }
                    ]
                  }
                ]
              },
              {
                label: '服务管理',
                id: 'SID0908010300',
                items: [
                  {
                    label: '配置服务接口',
                    id: 'SID0908010301',
                    // icon: [
                    //   '/pages/manage-platform/service-manage/configuration-manage/service-interface'
                    // ]
                  },
                  {
                    label: '配置服务控制规则',
                    id: 'SID0908010302',
                    // icon: [
                    //   '/pages/manage-platform/service-manage/configuration-manage/service-control-rules'
                    // ]
                  },
                  {
                    label: '批联机管理',
                    id: 'SID0908010303',
                    items: [
                      {
                        label: '批联机引擎管理',
                        id: 'SID0908010303a',
                        // icon: [
                        //   '404'
                        // ]
                      }
                    ]
                  },
                  {
                    label: '细粒度服务管理',
                    id: 'SID0908010304',
                    // icon: [
                    //   '/pages/manage-platform/service-manage/configuration-manage/fine-grained-service'
                    // ]
                  },
                  {
                    label: '业务邮件通知规则',
                    id: 'SID0908010305',
                    // icon: [
                    //   '404'
                    // ]
                  }
                ]
              },
              {
                label: '业务信息管理',
                id: 'SID0908010400',
                items: [
                  {
                    label: '配置业务域',
                    id: 'SID0908010401',
                    // icon: [
                    //   '/pages/manage-platform/business-manage/configure-business-domain'
                    // ]
                  }
                ]
              },
              {
                label: '业务规则转换',
                id: 'SID0908010500',
                items: [
                  {
                    label: '业务规则转换',
                    id: 'SID0908010501',
                    // icon: [
                    //   '/pages/manage-platform/business-rule/business-code-translate-rule-list'
                    // ]
                  }
                ]
              }
            ]
          },
          {
            label: 'BIP运维平台',
            id: 'SID0908020000',
            items: [
              {
                label: '运行平台池监控',
                id: 'SID0908020100',
                items: [
                  {
                    label: '运行平台池监控',
                    id: 'SID0908020101',
                    // icon: [
                    //   '/pages/operation-platform/running-platform-pool/run-platform-pool-monitoring'
                    // ]
                  }
                ]
              },
              {
                label: '交易量统计',
                id: 'SID0908020200',
                items: [
                  {
                    label: '交易量统计视图',
                    id: 'SID0908020201',
                    // icon: [
                    //   '/pages/operation-platform/transaction-statistics/transaction-statistics-view'
                    // ]
                  }
                ]
              },
              {
                label: '批量运维',
                id: 'SID0908020300',
                items: [
                  {
                    label: '查看线程池',
                    id: 'SID0908020301',
                    // icon: [
                    //   '/pages/operation-platform/batch-operations/view-thread-pool'
                    // ]
                  },
                  {
                    label: '查看队列',
                    id: 'SID0908020302',
                    // icon: [
                    //   '/pages/operation-platform/batch-operations/check-queue'
                    // ]
                  },
                  {
                    label: '创建任务',
                    id: 'SID0908020303',
                    // icon: [
                    //   '/pages/operation-platform/batch-operations/create-task'
                    // ]
                  },
                  {
                    label: '查看任务',
                    id: 'SID0908020304',
                    // icon: [
                    //   '/pages/operation-platform/batch-operations/view-task'
                    // ]
                  }
                ]
              },
              {
                label: '系统检测',
                id: 'SID0908020400',
                items: [
                  {
                    label: '运行平台连通性检测',
                    id: 'SID0908020401',
                    // icon: [
                    //   '/pages/operation-platform/system-testing/connectivity-detection'
                    // ]
                  }
                ]
              },
              {
                label: '日志管理',
                id: 'SID0908020500',
                items: [
                  {
                    label: '日志检索',
                    id: 'SID0908020501',
                    // icon: [
                    //   '/pages/operation-platform/log-management/log-retrieval'
                    // ]
                  }
                ]
              },
              {
                label: '服务运维',
                id: 'SID0908020600',
                items: [
                  {
                    label: '查询服务流水',
                    id: 'SID0908020601',
                    // icon: [
                    //   '/pages/operation-platform/service-operations/query-service-flow'
                    // ]
                  },
                  {
                    label: '查询冲正任务',
                    id: 'SID0908020602',
                    // icon: [
                    //   '/pages/operation-platform/service-operations/query-reverse-task'
                    // ]
                  },
                  {
                    label: '查询监控服务流水',
                    id: 'SID0908020603',
                    // icon: [
                    //   '/pages/operation-platform/service-operations/query-monitor-service-flow'
                    // ]
                  },
                  {
                    label: '营销交易量统计',
                    id: 'SID0908020604',
                    // icon: [
                    //   '404'
                    // ]
                  },
                  {
                    label: '查询数据库',
                    id: 'SID0908020605',
                    // icon: [
                    //   '/pages/operation-platform/service-operations/query-database'
                    // ]
                  },
                  {
                    label: '监控报表查询',
                    id: 'SID0908020606',
                    // icon: [
                    //   '/pages/operation-platform/service-operations/monitor-report-query'
                    // ]
                  },
                  {
                    label: '热更新管理',
                    id: 'SID0908020607',
                    items: [
                      {
                        label: '服务热更新',
                        id: 'SID0908020607a',
                        // icon: [
                        //   '/pages/operation-platform/service-operations/query-service-metadata'
                        // ]
                      }
                    ]
                  },
                  {
                    label: '查询后端服务流水',
                    id: 'SID0908020608',
                    // icon: [
                    //   '/pages/operation-platform/service-operations/query-back-end-service-flow'
                    // ]
                  },
                  {
                    label: '批联机任务管理',
                    id: 'SID0908020609',
                    // icon: [
                    //   '404'
                    // ]
                  }
                ]
              },
              {
                label: '报表管理',
                id: 'SID0908020700',
                items: [
                  {
                    label: '粗粒度服务报表',
                    id: 'SID0908020701',
                    // icon: [
                    //   '/pages/operation-platform/report-management/coarse-grained'
                    // ]
                  },
                  {
                    label: '细粒度服务报表',
                    id: 'SID0908020702',
                    // icon: [
                    //   '/pages/operation-platform/report-management/fine-grained'
                    // ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        label: '下载中心',
        icon: 'pi pi-cloud-download',
        id: 'SID0910000000',
        // icon: [
        //   '/pages/custom/downloadCenter/downCenter'
        // ]
      },
      {
        label: '工作流管理',
        icon: 'pi pi-briefcase',
        id: 'SID0400000000',
        items: [
          {
            label: '流程建模',
            // icon: [
            //   '/pages/cheryfs/workflow/activiti-work-flow/process-definition/process-maintenance'
            // ]
          },
          {
            label: '节点建模',
            // icon: [
            //   '/pages/cheryfs/workflow/activiti-work-flow/process-definition/business-node-management'
            // ]
          },
          {
            label: '业务状态',
            // icon: [
            //   '/pages/cheryfs/workflow/activiti-work-flow/process-definition/business-status'
            // ]
          },
          {
            label: '消息模板',
            // icon: [
            //   '/pages/cheryfs/workflow/activiti-work-flow/process-definition/message-template'
            // ]
          },
          {
            label: '事件服务',
            // icon: [
            //   '/pages/cheryfs/workflow/activiti-work-flow/process-definition/event-service'
            // ]
          },
          {
            label: '通用参数',
            // icon: [
            //   '/pages/cheryfs/workflow/activiti-work-flow/process-definition/general-parameters'
            // ]
          },
          {
            label: '任务转授权(员工)',
            // icon: [
            //   '/pages/cheryfs/workflow/activiti-work-flow/process-definition/task-to-authorization'
            // ]
          },
          {
            label: '任务转授权(管理)',
            // icon: [
            //   '/pages/cheryfs/workflow/activiti-work-flow/process-definition/task-to-authorization-manage'
            // ]
          },
          {
            label: '异常策略',
            // icon: [
            //   '/pages/cheryfs/workflow/activiti-work-flow/process-definition/exception-strategy'
            // ]
          },
          {
            label: '流程实例查询',
            // icon: [
            //   '/pages/cheryfs/workflow/activiti-work-flow/process-instance/process-instance-management'
            // ]
          },
          {
            label: '历史实例查询',
            // icon: [
            //   '/pages/cheryfs/workflow/activiti-work-flow/process-instance/history-instance'
            // ]
          },
          {
            label: '待办任务查询',
            // icon: [
            //   '/pages/cheryfs/workflow/activiti-work-flow/process-instance/check-task-query'
            // ]
          },
          {
            label: '已办任务查询',
            // icon: [
            //   '/pages/cheryfs/workflow/activiti-work-flow/process-instance/already-tasks-query'
            // ]
          },
          {
            label: '消息发送查询',
            // icon: [
            //   '/pages/cheryfs/workflow/activiti-work-flow/process-instance/message-sending-query'
            // ]
          },
          {
            label: '异常管理',
            // icon: [
            //   '/pages/cheryfs/workflow/activiti-work-flow/process-instance/manual-exception-information'
            // ]
          },
          {
            label: '流程处理报表(员工)',
            // icon: [
            //   '/pages/cheryfs/workflow/activiti-work-flow/report-query/process-report'
            // ]
          },
          {
            label: '流程处理报表(机构)',
            // icon: [
            //   '/pages/cheryfs/workflow/activiti-work-flow/report-query/process-org-report'
            // ]
          },
          {
            label: '任务处理报表(员工)',
            // icon: [
            //   '/pages/cheryfs/workflow/activiti-work-flow/report-query/task-report'
            // ]
          },
          {
            label: '任务处理报表(机构)',
            // icon: [
            //   '/pages/cheryfs/workflow/activiti-work-flow/report-query/task-org-report'
            // ]
          },
          {
            label: '规则引擎界面',
            // icon: [
            //   '/pages/cheryfs/workflow/activiti-work-flow/rule-engine/rule-engine-interface'
            // ]
          },
          {
            label: '规则引擎项目',
            // icon: [
            //   '/pages/cheryfs/workflow/activiti-work-flow/rule-engine/rule-engine-project'
            // ]
          }
        ]
      }
    ];
  }

}
