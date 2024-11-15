import React from 'react'
import CountUp from 'react-countup'

export default function Price() {
  return (
    <div id='price'>
        <div className="container">
        <div className="clients">
                <div>
                    <span className='client'> <CountUp end={98} duration={5} />+ </span>
                    <p>Довольных клиентов</p>
                </div >
                <div >
                    <span className='client'> <CountUp end={100} duration={5} />+  </span>
                    <p>Завершенных проектов</p>
                </div>
                <div >
                    <span className='client'> <CountUp end={25} duration={5} />+  </span>
                    <p>Сотрудников</p>
                </div>
            </div>
        </div>
    </div>
  )
}
