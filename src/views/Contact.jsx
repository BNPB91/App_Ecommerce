import React from "react"

const Contact = () => {
	return (
		<form className='w-50 mx-auto my-5'>
			<div className='mb-3'>
				<label
					for='exampleInputEmail1'
					className='form-label'>
					Write to us 📝
				</label>
				<input
					type='text'
					className='btn btn-outline-dark'
					style={{
						height: "100px",
						width: "100%",
					}}
					id='exampleInputEmail1'
					aria-describedby='emailHelp'
				/>
			</div>
			<div className='mb-3'>
				<label
					for='exampleInputPassword1'
					className='form-label'>
					Mail 📬
				</label>
				<input
					type='email'
					className='btn btn-outline-dark'
					id='exampleInputPassword1'
					style={{ width: "100%" }}
				/>
				<div id='emailHelp' className='form-text'>
				We will never share your email with anyone 🔐
				</div>
			</div>

			<button
				type='submit'
				className='btn btn-outline-dark'>
				Submit
			</button>
		</form>
	)
}

export default Contact
