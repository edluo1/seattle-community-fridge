export default function Volunteer() {
    return (
        <section className="h-full w-full">
            <h1>Volunteer Opportunities</h1>
            <div className="block lg:flex w-10/12 mx-auto">
                <div className="w-full my-auto lg:w-1/2">
                    <img src="https://storage.googleapis.com/seattle-community-fridge/volunteer/reid_volunteer.jpg" alt="reid_volunteer"></img>
                </div>
                <div className="w-full lg:w-1/3 mx-auto text-black text-xl sm:text-3xl font-SauceTomato">
                    <ul className="space-y-6 mt-14 lg:mt-36">
                        <li>Food Donation pick-ups</li>
                        <li>Fridge cleaning</li>
                        <li>Host/food donor outreach</li>
                        <li>Volunteer Coordination</li>
                        <li>Social Media</li>
                        <li>... & More!</li>
                    </ul>
                    <p className="mt-14 lg:mt-20">
                        Email us at <span><a href="seattlecommunityfridge@gmail.com" target="_blank">seattlecommunityfridge@gmail.com</a></span> to get started!
                    </p>
                </div>
            </div>
            <div className="block w-10/12 mx-auto">
                <h2 className="text-3xl sm:text-4xl mt-8 font-SauceTomato">Include these details:</h2>
                <ul className="list-disc">
                    <li>Name and Pronouns</li>
                    <li>Preferred method of contact (text message, email, or Instagram) (include the number, address, or account for us to contact you!)</li>
                    <li>Discord username (we use it to communicate!)</li>
                    <li>Help you'd like to provide, including:
                        <ul className="list-disc ml-5">
                            <li>Food donation pick-ups + fridge cleaning</li>
                            <li>Shelter building + fridge transport</li>
                            <li>Host/food donor outreach</li>
                            <li>Volunteer coordination</li>
                            <li>Social media</li>
                            <li>and more!</li>
                        </ul>
                    </li>
                    <li>Optionally, let us know if you work with other groups that combat food insecurity or other Seattle organizations/mutual aid networks!</li>
                </ul>

                <p>Check our <a href="/faq">FAQ page</a> if you have any questions or want to know more about SCF.</p>
                <p>If you applied earlier using a Google form and haven't gotten a response, please re-apply. We're experiencing technical difficulties with the old form.</p>
            </div>
        </section>
    )
}
