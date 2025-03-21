import { Button, Table, TableProps } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import useSWR from 'swr'

import { PAGE_SIZE } from '../constants'
import { fetcher } from '../lib/fetcher'

interface DataItemType {
  createdAt: string
  id: number
  title: string
}
interface DataType extends DataItemType {
  action: number
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: '번호',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '제목',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '생성일',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (date: string) => {
      const time = new Date(date)
      return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`
    },
  },
  {
    title: '액션',
    key: 'action',
    dataIndex: 'id',
    render: (id: number) => {
      return (
        <button
          onClick={(e) => {
            e.stopPropagation()
            alert(`삭제 ${id}`)
          }}
        >
          삭제
        </button>
      )
    },
  },
]

const ListPage = () => {
  const navigate = useNavigate()
  const [page, setPage] = useState<number | undefined>(2)
  const { data, error } = useSWR('/surveys', fetcher)
  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h3>데이터를 불러오는 중 오류가 발생했습니다</h3>
        <p>{error.message || '알 수 없는 오류가 발생했습니다'}</p>
        <Button type="primary" onClick={() => window.location.reload()}>
          다시 시도
        </Button>
      </div>
    )
  }
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data?.map((item: DataItemType) => ({
          ...item,
          key: item.id,
        }))}
        onRow={(record) => {
          return {
            onClick: () => {
              navigate(`/create/${record.id}`)
            },
          }
        }}
        pagination={{
          total: data?.length,
          current: page,
          pageSize: PAGE_SIZE,
        }}
        onChange={(pagination) => setPage(pagination.current)}
        locale={{ emptyText: '데이터가 없습니다' }}
      />
    </div>
  )
}

export default ListPage
