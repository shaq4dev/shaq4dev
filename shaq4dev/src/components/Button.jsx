const Button = ({ text, link }) => {
    return (
        <>
            <a href={link}>
                <button className="bg-button-blue text-white py-2 rounded-lg text-[22px] w-[100%] lg:px-10">{text}</button>
            </a>
        </>
    )
}

export default Button