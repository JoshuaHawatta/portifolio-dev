import { StyledPrivacyPolicySection } from './Styles'

const PrivacyPolicyPage = () => {
	return (
		<StyledPrivacyPolicySection>
			<h1>
				P<span>o</span>lítica de privacidade:
			</h1>

			<StyledPrivacyPolicySection>
				<h2>
					Ao utilizar este site, você entende que <span>não</span> coletaremos ou usaremos suas
					informações pessoais.
				</h2>
				<p>
					Para mais informações, visitar as normas da Constituição Federal de 1988
					<span>(art. 5º, LXXIX; e o art. 22º, XXX – incluídos pela EC 115/2022)</span>, das
					normas de Proteção de Dados (LGPD, Lei Federal 13.709/2018), das disposições
					consumeristas da <span>Lei Federal 8078/1990</span> e as demais normas do ordenamento
					jurídico brasileiro aplicáveis.
				</p>
			</StyledPrivacyPolicySection>
		</StyledPrivacyPolicySection>
	)
}
