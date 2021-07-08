/*
 * @Author: your name
 * @Date: 2021-07-08 17:02:55
 * @LastEditTime: 2021-07-08 17:07:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /complier/test/index.ts
 */
const generate = require('../dist/index').default

console.log(generate({
    "a": 123,
    "b": "sdfsdf",
    "sub": [1, 2, 3, 4],
    "subB": {
        "sss": 123
    },
    "arrayaa": [
        {
            "name": 123,
            "age": 18
        },
    ]
}));