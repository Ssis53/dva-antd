import React from 'react';
import { Table } from 'antd'
import styles from './Mytable.css';

const columns = [
                  { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
                  { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
                  { title: 'Column 1', dataIndex: 'address', key: '1' },
                  { title: 'Column 2', dataIndex: 'address', key: '2' },
                  { title: 'Column 3', dataIndex: 'address', key: '3' },
                  { title: 'Column 4', dataIndex: 'address', key: '4' },
                  { title: 'Column 5', dataIndex: 'address', key: '5' },
                  { title: 'Column 6', dataIndex: 'address', key: '6' },
                  { title: 'Column 7', dataIndex: 'address', key: '7' },
                  { title: 'Column 8', dataIndex: 'address', key: '8' },
                  { title: 'Column 9', dataIndex: 'address', key: '9' },
                  { title: 'Column 10', dataIndex: 'address', key: '10' },
                  { title: 'Column 11', dataIndex: 'address', key: '11' },
                  { title: 'Column 12', dataIndex: 'address', key: '12' },
                  {
                    title: 'Action',
                    key: 'operation',
                    fixed: 'right',
                    width: 100,
                    render: () => <a href="#">action</a>,
                  },
                ];
const data = [{
                  key: '1',
                  name: 'John Brown',
                  age: 32,
                  address: 'New York Park',
                }, {
                  key: '2',
                  name: 'Jim Green',
                  age: 40,
                  address: 'London Park',
                }];

const data2 = [];
const addData = () => {
    for(var i = 0; i < 100; i++) {
        var rAge = Math.floor(Math.random() * 50);
        var obj = {};
        obj.key = i + 1;
        obj.name = `Ws${i}`;
        obj.age =  rAge + Math.round(i/10);
        obj.address = 'hhh';
        data2.push(obj);
    }
}

const Mytable = (props) => {
    addData();
    return (
    <div>
        <Table columns={columns} dataSource={data2} scroll={{ x: 2000 }} pagination={{ pageSize: 10 }} />
    </div>
    );
};

export default Mytable;
