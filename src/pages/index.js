import { useAuth0 } from "@auth0/auth0-react"
import { navigate } from "gatsby"
import React from "react"
import CallToAction from "../components/CTA"
import Features from "../components/Features"
import HeroImage from "../components/HeroImage"
import Layout from "../components/layout"
import Seo from "../components/Utils/seo"

const IndexPage = () => {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0()

  if (isLoading) return "loading...."

  if (isAuthenticated) navigate("/app", { replace: true })

  return (
    <Layout isHomePage={true}>
      <Seo title="Home" />
      <HeroImage loginWithRedirect={loginWithRedirect} />
      <Features />
      <CallToAction
        title="Ready To Save Your Links?"
        buttonText="Get Started For Free"
        handleClick={loginWithRedirect}
      />
    </Layout>
  )
}

export default IndexPage
