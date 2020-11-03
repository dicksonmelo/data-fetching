import React, { useState, useEffect } from 'react'

function ContactInformation() {
  const [contactDataList, setContactDataList] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json()).then((info) => setContactDataList(info))
  }, [])

  return (
    <div >
      <div className="antialiased bg-gray-200 font-sans">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center min-h-screen items-stretch">
            <div className="max-w-sm w-64 py-6 px-3">
              <span className="font-bold">Contact Name </span>
              <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                {contactDataList.map( contactData => {
                  return (
                    <div>
                      <div className="w-full flex justify-center mt-2 flex-col text-center">
                        <span className="text-gray-700 font-semibold">{contactData.name}</span>
                      </div>
                      <hr className="border-1 border" />
                    </div>
                  )
                }
                )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-sm w-full sm:w-1/2 lg:w-1/3 py-6 px-3">
        <span className="font-bold">Contact Details </span>
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="w-full flex justify-center mt-2">
            <div className="text-center bg-cover rounded-full h-32 w-32 bg-center">
              <div className="flex justify-end"></div>
            </div>
            {contactDataList.map(contactData => {
              return (
                <div>
                  <div className="p-4 flex flex-col items-center">
              <p className="uppercase tracking-wide text-normal font-bold text-gray-700">{contactData.name}</p>
                    <p className="tracking-wide text-sm text-gray-600">chief sumo</p>
                    <div className="flex px-4 flex-col">
                      <p>
                        <i className="fas fa-briefcase mr-2 text-gray-700"></i>
                        <span className="text-gray-700">Works at: </span>
                        <span className="text-gray-700 font-semibold break-all">
                          Sumo Group (sumo.com/alguma-coisa)
                </span>
                      </p>
                      <p className="mt-2">
                        <i className="fas fa-phone  mr-2 text-gray-700"></i>
                        <span className="text-gray-700">Phone: </span>
                        <span className="text-gray-700 font-semibold break-all">(888) 0000-0000
                  </span>
                      </p>
                      <p className="mt-2">
                        <i className="fas fa-home  mr-2 text-gray-700"></i>
                        <span className="text-gray-700">Lives In: </span>
                        <span className="text-gray-700 font-semibold break-all">
                          Austin, Texas
                    </span>
                      </p>
                      <p className="mt-2">
                        <i className="fas fa-clock  mr-2 text-gray-700"></i>
                        <span className="text-gray-700">
                          Local Time: </span>
                        <span className="text-gray-700 font-semibold break-all">
                          10:13 AM MST
                      </span>
                      </p>
                    </div>
                    <div className="mt-2 flex flex-wrap px-4 mb-4 text-gray-700"><i className="fa-lg fab fa-facebook-square mr-2 cursor-pointer"></i><i className="fab fa-linkedin mr-2 fa-lg cursor-pointer"></i><i className="fa-lg fab fa-twitter-square cursor-pointer"></i></div>
                  </div>
                </div>
              )
            }
            )
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContactInformation