function Entry(props) {
    return(
        <tr className="term">
          <td>
            {props.ukrainian}
          </td>
          <td>
            {props.russian}
          </td>
          <td>
            {props.finnish}
          </td>
          <td>
            {props.english}
          </td>
        </tr>
    )
}

export default Entry;