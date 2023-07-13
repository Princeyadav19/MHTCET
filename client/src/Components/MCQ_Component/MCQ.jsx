import React,{useState} from 'react'
import { Radio, Space } from 'antd';

const MCQ = () => {
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <div className='flex  flex-col ml-5 space-x-5 space-y-3'>
            <div>
                <h1>Q.1</h1>
                <h1>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dicta provident dolorem distinctio obcaecati aspernatur labore similique, voluptatum, quo, rerum ex quas animi ipsa non et culpa est laboriosam totam magni? Perferendis recusandae nulla culpa inventore, nostrum, laudantium illo ipsam mollitia ea quis quia distinctio pariatur? Iusto ut minus quos, officiis eius numquam eveniet officia, quam sunt temporibus perspiciatis cupiditate aut obcaecati dolorum quibusdam commodi, totam quis architecto quisquam libero ab. Eum aperiam ullam rem quos beatae consequuntur aliquam non doloribus eaque? Recusandae culpa vero aliquid odio atque omnis eos, ullam facere corporis ipsum? Tempora voluptatibus numquam doloremque mollitia odio! ipsum dolor sit amet consectetur adipisicing elit. Iure inventore dolore eum minima tenetur laboriosam illum commodi accusamus nostrum saepe ratione totam dignissimos quibusdam non architecto, quo accusantium, placeat voluptas tempora vitae numquam! Animi temporibus eligendi odit? Rem reiciendis nihil nam corporis, exercitationem tempora perspiciatis quos mollitia. Perferendis, porro nulla eveniet excepturi saepe reprehenderit repudiandae, et neque voluptas esse, veniam earum rerum quidem nihil numquam maiores obcaecati error molestiae hic illo! Voluptatibus vel repellendus sequi nulla, possimus repellat cum eaque, ullam assumenda commodi nihil corrupti. Cupiditate voluptatum eum voluptas, amet enim necessitatibus aut esse, unde culpa aliquid, qui est eveniet? Lorem ipsum sint quibusdam qui adipisci laborum vel quod tenetur voluptate velit, officia animi maxime dolorem quasi exercitatit.</h1>
            </div>
            <div>
                <Radio.Group onChange={onChange} value={value}>
                    <Space direction="vertical">
                        <Radio value={1}>Lorem ipsum dolor sit amet consectetur.</Radio>
                        <Radio value={2}>Lorem ipsum dolor sit amet consectetur.</Radio>
                        <Radio value={3}>Lorem ipsum dolor sit amet consectetur.</Radio>
                        <Radio value={4}>Lorem ipsum dolor sit amet consectetur.</Radio>
                    </Space>
                </Radio.Group>
            </div>
        </div>
    )
}

export default MCQ