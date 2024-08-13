function HeaderComponent(){
return(
<>
  <h1>Welcomeback</h1>
  <CourseList></CourseList>
  <FooterNote></FooterNote>
</>
)
}
function CourseList(){
    return(

    <>
    <h2>Completed Courses</h2>
    <ul>
    <li>CSS</li>
    <li>HTML</li>
    <li>JS</li>
    </ul></>
    )
}
function FooterNote(){
    return(
        <>
        <h6>copyrighted to xzcorp</h6>
        </>
    )
}
//default export
//exporting as js objects
export default HeaderComponent
//export {CourseList}

