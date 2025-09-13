function About() {
  return (
    <div className='about' style={{ padding: '10px', flex: 1, justifyContent: 'center', display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
      <div style={{ border: '1px solid black', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center', marginRight: '20px' }}>
        <h1>About</h1>
        <p>Una breve informacion acerca de esta web.</p>
      </div>
      <h1></h1>
    </div>
  )
}

export default About