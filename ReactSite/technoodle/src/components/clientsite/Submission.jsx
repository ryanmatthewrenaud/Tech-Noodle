export default function Submission({ contactID, show }) {

    return (
        <div hidden={!show}>
            {!contactID ? "Unable to sumbit currently please try again later!" : <div> Submitted Successfully </div>}

        </div>
    )

}