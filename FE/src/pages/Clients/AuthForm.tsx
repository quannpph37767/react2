import React from 'react'

const AuthForm = () => {
  return (
    <div>
        {/* <h1>{!isLogin ? "Đăng kí" : "Đăng nhập"}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="">Email</label> <br />
                <input type="text" {...register("email", {required : true})} /> <br />
                {errors.email && (
                    <span className='text-red'>{errors.email?.message}</span>
                )}
            </div>
            <div>
                <label htmlFor="">Password</label> <br />
                <input type="password" {...register("password", {required : true})} /> <br />
                {errors.password && (
                    <span className='text-red'>{errors.password?.message}</span>
                )}
            </div> <br />
            <button type='submit'>{!isLogin ? "Đăng kí" : "Đăng nhập"}</button>
        </form> */}
    </div>
  )
}

export default AuthForm