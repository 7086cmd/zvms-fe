import { Part } from "zvms-api-gen/types";
import { arr, str } from "zvms-types-gen";
export const report: Part = {
    desc: "反馈",
    paths: {
        items: { //  /report/items/
            get: { // GET --
                desc: "获取反馈列表",
                req:{
                    param1:arr(arr(str())),
                    param2:str()
                },
                res: {
                    data:arr(str())
                }
            },
            post:{

            },
            paths:{
                "123/456":{ //   /report/items/123/456
                    
                }
            }
        },
        "":{ //   /report/

        }
    }
};