import PropTypes from 'prop-types'


export const Sec3 = (props) => {
  return (
    <div>
        <p>{props.title}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolorum veniam, maxime cumque, eveniet a molestiae sunt et ipsa, eaque dolores aliquam qui amet laboriosam vel distinctio? Sunt, modi dolores!</p>
    </div>
  )
}

Sec3.propTypes ={
    title : PropTypes.string.isRequired,
}
Sec3.defaultProps ={
    title :"Enter your title",
}
