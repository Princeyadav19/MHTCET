import { Table, Input } from 'antd';
import { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';

const Ques_Table = () => {
  const [search_ques, setsearch_ques] = useState("")
  const columns = [
    {
      title: 'Subject',
      dataIndex: 'subject',
      filters: [
        {
          text: 'Math',
          value: 'Math',
        },
        {
          text: 'Physics',
          value: 'Physics',
        },
        {
          text: 'Chemistry',
          value: 'Chemistry',
        },
      ],
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value, record) => record.subject.startsWith(value),
      width: '30%',
    },
    {
      title: 'Question',
      dataIndex: 'question',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
        return <Input
          autoFocus
          value={selectedKeys[0]}
          onChange={(e) => {
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }}
          placeholder='Search...'
          onPressEnter={() => {
            confirm()
          }}
          onBlur={() => {
            confirm()
          }}
        ></Input>
      },
      filterIcon: () => {
        return <SearchOutlined />
      },
      onFilter: (value, record) => {
        return String(record.question)
        .toLowerCase().
        includes(value.toLowerCase());
      }
    },
    {
      title: 'Chapter',
      dataIndex: 'chapter',
    },
  ];

  const data = [
    {
      key: '1',
      subject: 'Physics',
      question: 32,
      chapter: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      subject: 'Math',
      question: 42,
      chapter: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      subject: 'Chemistry',
      question: 32,
      chapter: 'Sydney No. 1 Lake Park',
    },
    {
      key: '4',
      subject: 'Math',
      question: 32,
      chapter: 'London No. 2 Lake Park',
    },
    {
      key: '5',
      subject: 'Math',
      question: 32,
      chapter: 'London No. 2 Lake Park',
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
  };


  return (
    <div className='shadow-xl rounded-xl space-y-5 flex flex-col justify-center items-center'>

      <Input.Search className='w-7/12  ' placeholder='Search...'/>
      <Table className='w-full' columns={columns} dataSource={data} onChange={onChange} />
    </div>
  )
}
export default Ques_Table;