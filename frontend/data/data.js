const data = [
    {
        code: `
        const MyComponent = ()=>{
            return <tag> {/* ... */} </tag>
          }
          MyComponent.getInitialProps = ({res}) => {
            if (res) { 
              /* serve-side */
              res.writeHead(302, {
              Location: 'http://example.com'
            })
            res.end()
            } else {      
             /* client-side */
              Router.push('http://example.com')
            }
            return {}
          }
        `
    }
]

export default data;