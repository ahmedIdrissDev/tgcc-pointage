import React from 'react'
import Card from './ui/card'
import { TrendingDown, TrendingUp, User } from 'lucide-react'

const Bord = () => {
  return (
    <div className='w-full p-2 h-60 gap-2 grid grid-cols-3'>
       <Card
        Number={333}
        icon={<User/>}
        label='Employees Overview'
        description='A quick summary of all employees'
        hasbutton
       />
              <Card
        Number={3}
        icon={<TrendingDown/>}
        label='Absent'
        description='Staff members marked as absent'
       />
              <Card
        Number={33}
        icon={<TrendingUp/>}
        label='Present'
        description='Team members on duty today.'
       />
    </div>
  )
}

export default Bord