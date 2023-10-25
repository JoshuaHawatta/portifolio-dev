import { StyledPrivacyPolicyArticle } from './Styles'

const PrivacyPolicyPage = () => {
	return (
		<StyledPrivacyPolicyArticle>
			<section>
				<h1>
					P<span>o</span>lítica de privacidade
				</h1>

				<section>
					<h2>
						Ao utilizar nossos serviços, você entende que <span>não</span> coletaremos ou
						usaremos suas informações pessoais.
					</h2>
					<p>
						Para mais informações, visitar as normas da Constituição Federal de 1988
						<span>(art. 5º, LXXIX; e o art. 22º, XXX – incluídos pela EC 115/2022)</span>,
						das normas de Proteção de Dados (LGPD, Lei Federal 13.709/2018), das disposições
						consumeristas da <span>Lei Federal 8078/1990</span> e as demais normas do
						ordenamento jurídico brasileiro aplicáveis.
					</p>
				</section>
			</section>
		</StyledPrivacyPolicyArticle>
	)
}

export default PrivacyPolicyPage
