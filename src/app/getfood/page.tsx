import { Button } from '@headlessui/react'

export default function GetFood() {
    return (
        <section className="h-full w-full">
            <h1>Getting Food</h1>
            <div className="block lg:flex w-10/12 mx-auto">
                <div className="w-full lg:w-1/3 mx-auto text-black text-xl sm:text-3xl font-SauceTomato">
                    <ul className="space-y-6 mt-14 lg:mt-36">
                        <li>Please come to our fridge spaces to get food!</li>
                    </ul>

                    <Button as="a" href="/locations">
                        Fridge Locations
                    </Button>

                    <h2>Depending on location, we also offer:</h2>

                    <ul className="space-y-6 mt-14 lg:mt-36">
                        <li>Free Wi-Fi</li>
                        <li>Phones</li>
                        <li>Supplies for warmth</li>
                        <li>Need a request? Write your request on the whiteboard and we'll try to add it to the regular delivery!</li>
                    </ul>
                </div>
            </div>

            <h2 className="text-2xl md:text-5xl mt-14 font-SauceTomato text-blue-500">FOODBANK PICKUP DELIVERY SCHEDULE</h2>
            <div className="w-full flex justify-center my-8">
              <iframe 
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&mode=AGENDA&showTabs=0&showTitle=0&showNav=0&showTz=0&showCalendars=0&showDate=0&showPrint=0&src=NDhiY2FlMDM0ZTc2MzRlNjM2YmYyZmQwMTJhNmY2MTZlMjQ5Y2YxMTlkYzg5Y2QzY2NiNzNkNDgwMzZmMTc4NUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23ef6c00" 
                style={{ border: 0 }} 
                width="800" 
                height="400" 
                frameBorder="0" 
                scrolling="no"
              />
            </div>
        </section>
    )
}
