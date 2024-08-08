import { Footer } from 'flowbite-react'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

const FooterCom = () => {
  return (
    <div>
        <Footer container className='border border-t-8 border-teal-500'>
            <div>
                <div>
                    <div className='p-5'>
                    <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Pra
        </span>
        Blog
      </Link>
                    </div>
                    <div className="grid grid-col-2 gap-3 sm: mt-4 sm:grid-cols-3 sm:gap-6">
                        <div >
                        <Footer.Title title='About'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='https://www.codewithharry.com/' target='_blank' rel='noopener norefrencer'>  
                                100.js project
                            </Footer.Link>
                            <Footer.Link href='https://starsunfolded.com/ashish-chanchlani/' target='_blank' rel='noopener norefrencer'>  
                               Ashsish chanchalani
                            </Footer.Link>
                        </Footer.LinkGroup>
                        
                        </div>
                        <div >
                        <Footer.Title title='Follow us'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='https://github.com/Praharsh7270' target='_blank' rel='noopener norefrencer'>  
                                Github
                            </Footer.Link>
                            <Footer.Link href='https://www.linkedin.com/in/praharsh-singh-822a1224b/' target='_blank' rel='noopener norefrencer'>  
                               Linkdin
                            </Footer.Link>
                        </Footer.LinkGroup>
                        </div>
                        <div >
                        <Footer.Title title='Privacy policy'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='#'>  
                                Terms &amp; Conditions
                            </Footer.Link>
                            
                        </Footer.LinkGroup>
                        </div>
                        
                    </div>
                    <Footer.Divider/>
                    <div>
                        <Footer.Copyright 
                            href='#'
                            by = "Praharsh Singh"
                            year={new Date().getFullYear()}
                        />
                        <div className='flex gap-2'>
                            <Footer.Icon href='#' icon={BsFacebook}/>
                            <Footer.Icon href='#' icon={BsInstagram}/>
                            <Footer.Icon href='#' icon={BsLinkedin}/>
                        </div>
                    </div>
                </div>
            </div>
            </Footer>
    </div>
  )
}

export default FooterCom