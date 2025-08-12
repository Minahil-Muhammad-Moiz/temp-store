import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, fetchUsers, postUsers, updatePost } from '../slices/userSlice';

const Posts = () => {
    const [titleValue, settitleValue] = useState('')
    const [bodyValue, setbodyValue] = useState('')
    const dispatch = useDispatch()
    const data = useSelector(state => state.users.data)
    const [editId, setEditId] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editId) {
            dispatch(updatePost({ id: editId, title: titleValue, body: bodyValue }));
            setEditId(null);
        } else {
            dispatch(postUsers({ title: titleValue, body: bodyValue }))
        }
        settitleValue('')
        setbodyValue('')
    }

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);
    console.log(data);

    return (
        <>
            <form className='border' onSubmit={handleSubmit}>
                <input className='border' type='text' value={titleValue} onChange={e => settitleValue(e.target.value)} />
                <input className='border' type='text' value={bodyValue} onChange={e => setbodyValue(e.target.value)} />
                <button type='submit' >Submit</button>
            </form>
            {data?.slice(-3).map((item) => <p key={item?.id}>
                {item?.title}
                <button onClick={() => { setEditId(item.id); settitleValue(item.title); setbodyValue(item.body); }}>Edit</button>
                <button onClick={() => dispatch(deletePost(item.id))}>X</button></p>)}
        </>
    )
}

export default Posts