"use client";
import React, { useEffect, useState } from 'react';
import { authentication } from '@/api/login';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Text, CustomizedButtons, Title } from '$/Components';
import { useRouter } from 'next/navigation';
import { Box } from '@/lib/mui';
import { checkServer } from '@/api';

export default function Login({ lan, setLan, setIsLoggedIn, setUser }) {
	const router = useRouter()
	const lanSel = lan === 'Dk'
	const sprog = (dansk, engelsk) => lanSel ? dansk : engelsk;
	const schema = Yup.object().shape({
		brugernavn: Yup.string().required(sprog('hvad med dit brugernavn eller E-mail???', `What's your username or E-mail`)),
		password: Yup.string().required(sprog('Du skal bruge password for at logge ind', 'You need a password to log in'))
	})

	const defaultValues = {
		brugernavn: '',
		password: ''
	}

	const [message, setMessage] = useState({})
	const [error, setErrorServer] = useState(false)
	const [isLoading, setIsLoading] = useState(false);
	const [status, setStatus] = useState('');
	//const navigate = useNavigate();
	const loginAPI = authentication.login

	const { handleSubmit, formState: { errors }, control, setError } = useForm({
		defaultValues,
		resolver: yupResolver(schema)
	});

	useEffect(() => {
		checkServer(setMessage, setErrorServer)
	}, [])

	const errormessage = sprog('Beklager men serveren er nede, prøv igen senere ellers kontakt mig på ', 'Sorry but the server is down, try again later otherwise contact me on ');
	const contactMail = <a href="mailto:christian@hammervig.dk">christian@hammervig.dk</a>
	const serverError = <Box sx={{ textAlign: 'center', textShadow: '-1px 0px 0px black' }}><Title font='Chango' color='blue' size={10}>{errormessage}{contactMail}</Title></Box>;

	const onSubmit = async (data) => {
		let cancel = false
		let rolle;
		setIsLoading(true)
		try {
			await loginAPI(data, setMessage)
			//console.log(message)
			setIsLoading(false)
		} catch (err) {
			setIsLoading(false)
			if (err.name === 'bruger') {
				const bruger = err.errorMessage
				setStatus(sprog(`Brugeren ${bruger} findes ikke`, `the user ${bruger} doesn't exist`))
			} else if (err.name === 'password') {
				const password = err.errorMessage
				setStatus(sprog(password, 'Wrong password'))
			} else {
				setStatus(err)
			}
		} finally {
			if (!message.error) {
				rolle = authentication.currentUserValue.role
				setLan(authentication.currentUserValue.sprog)
				setUser(authentication.currentUserValue)
				setIsLoggedIn(true)
				console.log(rolle)
			}
		}
		switch (rolle) {
			case "FISSE":
				router.push('/loves_rosie_and_bella');
				break;
			case "ADMIN":
				router.push('/skrivebord');
				break;
			case "ARBEJDE":
				router.push('/skrivebord');
				break;
			case undefined:
				setError(message.name, status);
				break;
			default:
				router.push('/skrivebord');
				break;
		}

		return () => {
			console.log('cancel ' + cancel)
			cancel = true;
		}
	}

	const centrer = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		mt: 2
	}
	const logIndFormular = <form onSubmit={handleSubmit(onSubmit)}>
		<Box sx={{
			centrer
		}}>
			<Box sx={{
				centrer
			}}>
				<Controller
					control={control}
					name="brugernavn"
					render={({ field: { onChange } }) =>
						<Text
							autoFocus
							width={300}
							label={sprog('Brugernavn/E-mail', 'Username/E-mail')}
							onChange={onChange}
							type="text"
							errors={errors.brugernavn}
						/>
					}
					rules={{ required: true }}
					type="text"
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</Box>
			{errors && errors.brugernavn?.message}
			<Box sx={{
				centrer
			}}>
				<Controller
					id='password'
					control={control}
					name="password"
					render={({ field: { onChange } }) =>
						<Text
							width={300}
							label='Password'
							onChange={onChange}
							type="password"
							errors={errors?.password}
						/>
					}
					rules={{
						required: true,
					}}
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</Box>
			{errors && errors.password?.message}
			<div>
				<CustomizedButtons type="submit" disabled={isLoading}>{sprog('Log ind', 'Login')}</CustomizedButtons>
			</div>
			<label>{status}</label>
		</Box>
	</form>

	const Visning = () => error ? serverError : logIndFormular;

	return (
		<Visning />
	);
}