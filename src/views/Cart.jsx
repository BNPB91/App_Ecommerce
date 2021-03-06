import React from "react"
import {
	useSelector,
	useDispatch,
} from "react-redux"
import { Link } from "react-router-dom"
import {
	addCart,
	delCart,
} from "../redux/actions/actions"

const Cart = () => {
	const state = useSelector(
		(state) => state.handleCart
	)

	const dispatch = useDispatch()

	const handleAdd = (item) => {
		dispatch(addCart(item))
	}

	const handleDel = (item) => {
		dispatch(delCart(item))
	}
	console.log(state)
	const emptyCart = () => {
		return (
			<div className='px-4 my-5 bg-light rounded-3 py-5'>
				<div className='container py-4'>
					<div className='row text-center'>
						<h3>Your Cart Is Empty</h3>
					</div>
				</div>
			</div>
		)
	}

	const cartItems = (product) => {
		return (
			<>
				<div className='px-4 my-5 bg-light roundd-3'>
					<div className='container py-4'>
						<div className='row justify-content-center'>
							<div className='col-md-4'>
								<img
									src={product.image}
									alt={product.title}
									width='180px'
									height='200px'
								/>
							</div>
							<div className='col-md-4'>
								<h3>{product.title}</h3>
								<p className='lead fw-bold'>
									{product.qty} x ${product.price}
									= ${product.qty * product.price}
								</p>
								<button
									className='btn btn outline-dark me-4'
									onClick={() =>
										handleDel(product)
									}>
									<i className='fa fa-minus'></i>
								</button>
								<button
									className='btn btn outline-dark me-4'
									onClick={() =>
										handleAdd(product)
									}>
									<i className='fa fa-plus'></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}

	const buttons = () => {
		return (
			<>
				<div className='container'>
					<div className='row'>
						<p>Total: $</p>
						<Link
							to='/checkout'
							className='btn btn-outline-dark mb-5 w-25 mx-auto'>
							Proceed to Checkout
						</Link>
					</div>
				</div>
			</>
		)
	}

	return (
		<div>
			<div className='container d-flex justify-content-center'>
				<div className='row'>
					{state.length === 0 && emptyCart()}
					{state.length !== 0 &&
						state.map(cartItems)}
					{state.length !== 0 ? (
						buttons()
					) : (
						<Link
							to='/products'
							className='btn btn-outline-dark w-25 mx-auto'>
							Back
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}

export default Cart
