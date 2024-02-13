import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import style from "./style.module.css";
import Link from "next/link";

const page = () => {
  return (
    <>
      <main
        className={
          "relative flex-col flex  justify-center items-center " + style["main"]
        }
      >
        <div className="w-screen h-screen  flex justify-evenly py-40 items-center flex-col relative ">
          <h1 className="font-got text-8xl capitalize text-white ">
            Accommodation at LPU
          </h1>
          <Link
            href={"/sign-in"}
            className="bg-yellow-600 text-xl hover:bg-yellow-500 transition-all duration-700 rounded-tl-3xl font-got font-bold rounded-ee-3xl text-white p-4"
          >
            Register Now
          </Link>
        </div>

        <div className="flex w-full justify-center">
          <Tabs defaultValue="account" className="w-[90%] text-white">
            <TabsList className="bg-orange-400 bg-opacity-65 text-white ">
              <TabsTrigger value="account">About us</TabsTrigger>
              <TabsTrigger value="policies">Accommodation policies</TabsTrigger>
              <TabsTrigger value="instructions">Instructions</TabsTrigger>
              <TabsTrigger value="faq">FAQs</TabsTrigger>
              <TabsTrigger value="contact-us">Contact Us</TabsTrigger>
            </TabsList>

            <TabsContent
              className="w-[80%] p-8 border-2 bg-orange-400 bg-opacity-65"
              value="account"
            >
              Ethereon has been an example in achieving huge feats with
              unparalleled figures ever since its inception in 1998. Ethereon
              has grown in stature in terms of its content, infrastructure, and
              logistics. The overwhelming crowd of such a high magnitude and a
              world-class technological display along with a tinge of enjoyment
              has made our dream a technological extravaganza. With such
              vastness and diversity, the hospitality of the guests is of
              paramount importance. We, at Ethereon, constantly strive towards
              the satisfaction of everyone. We shall leave no stone unturned in
              fulfilling the needs of secure accommodation away from home. Along
              with accommodation facilities for our participants, we also set up
              a cafeteria serving a variety of cuisines satisfying the needs of
              every palate. We strive to make your stay comfortable and your
              experience, a memorable one. Hospitality management would be one
              of the prime focuses of Team Ethereon 2023-24. Hope to see you at
              Ethereon 2023-24. We will be more than happy to receive your
              suggestions and queries. Kindly email at hospitality@ethereon.org
            </TabsContent>

            <TabsContent
              value="policies"
              className="w-[80%] p-8 border-2 bg-orange-400 bg-opacity-65"
            >
              <div className="flex flex-col gap-4">
                <div className="flex gap-10 ">
                  <h4 className="shrink-0 w-[20%]">Accommodation Charges</h4>
                  <p className="">
                    Accommodation charges are INR 2999 3499 (Early Bird Offer)
                    per candidate for 5 days. Maximum of 5 nights stay allowed
                    (26th Dec 6 AM - 30th Dec 10 AM). It does not include food
                    facility. Guest can purchase their meals from the food
                    court, night cafeteria or private hostel canteens or hostel
                    messes at subsidized rates.
                  </p>
                </div>

                <div className="flex gap-10">
                  <h4 className="shrink-0 w-[20%]">Timing</h4>
                  <p className="">
                    Check-in: 6:00 AM to 10:00 PM on your check-in date.
                  </p>
                </div>

                <div className="flex gap-10">
                  <h4 className="shrink-0 w-[20%]">Cancellation Policy</h4>
                  <p className="">
                    Confirmed Accommodation can be cancelled through email only.
                    Send an e-mail having your Acco ID and the number of members
                    for whom accommodation has to be cancelled, at
                    hospitality@techfest.org. The subject of the email should be
                    ""Cancellation of Accommodation"" For any cancellations
                    before deadline, 75% of the total amount shall be refunded
                    within 10 working days after the festival. There shall be no
                    refunds for cancellation after the deadline.Deadline of
                    cancellation: 10th December 2023.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent
              className="w-[80%] p-8 flex flex-col gap-4 border-2 bg-orange-400 bg-opacity-65"
              value="instructions"
            >
              <div className="">
                1. All guests carrying electronic items of any kind will have to
                declare them at the Lovely Professional University main gate
                through an 'Ethereon Gate Pass.' The belongings will also be
                checked on the way out of LPU along with the 'Gate Pass,'
                failing to do so will result in the belongings being impounded.
              </div>

              <div className="">
                2. All guests will be provided with a mattress. Ethereon will
                not provide mattress cover, blankets, or pillows. The guests are
                encouraged to arrange them on their own (if required), since the
                weather might get cold during the night.
              </div>

              <div className="">
                3. Any commodities issued to the guests would have to be
                returned in sound condition to the organizers during check-out.
              </div>

              <div className="">
                4. Random checks would be made to avoid any illegal stay at the
                campus. Any team failing to produce their electronic/physical
                receipts of accommodation would be heavily fined and
                disqualified.
              </div>

              <div className="">
                5. Entry will be only through the 'Main Gate' of Lovely
                Professional University. All other gates will be closed for
                entry.
              </div>

              <div className="">
                6. All guests are required to carry their valid government photo
                ID proofs at all times. In addition, the student participants
                are also required to carry their valid College photo ID card.
                Any guest failing to produce their ID card will not be permitted
                inside the campus during Ethereon 2023.
              </div>

              <div className="">
                7. Alcohol, drugs, sharp objects, and explosives of any kind are
                strictly prohibited inside the campus. Any other item if deemed
                unsafe will be prohibited. The decision of Security and Ethereon
                team will be final in case of any disputes.
              </div>

              <div className="">
                8. No outside vehicles will be allowed into the campus during
                Ethereon 2023.
              </div>

              <div className="">
                9. All guests are required to maintain the decorum and
                cleanliness of the campus, and follow the rules of the campus at
                all times.
              </div>

              <div className="">
                10. Ethereon 2023 and Lovely Professional University will not be
                responsible for any mishaps that occur through the duration of
                stay for Ethereon 2023.
              </div>
            </TabsContent>

            <TabsContent
              className="w-[80%] p-8 flex flex-col gap-4 border-2 bg-orange-400 bg-opacity-65"
              value="faq"
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    How to avail accommodation?
                  </AccordionTrigger>
                  <AccordionContent>
                    1. Click on Register now <br /> 2. Complete the payment
                    procedure. Confirmation will be sent to you. Report at
                    accommodation desk
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    What is the payment procedure?
                  </AccordionTrigger>
                  <AccordionContent>
                    The payment procedure will be online. The accommodation
                    charges are provided under the tab Accommodation Charges on
                    the hospitality page. You will have to report at the
                    accommodation desk near the Old Swimming Pool with the email
                    printout and the mandatory documents. Failing to bring any
                    of the documents may lead to the cancellation of your
                    accommodation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    How do I know that my payment is confirmed??
                  </AccordionTrigger>
                  <AccordionContent>
                    Confirmation is not confirmed till a confirmation mail is
                    not received in 24 hours. If not received confirmation in 24
                    hours, then mail your transaction ID, Techfest ID, name,
                    amount to nivesh@techfest.org with the subject as
                    Transaction ID :: team ID :: Confirmation mail not received.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Documents that guests should carry?
                  </AccordionTrigger>
                  <AccordionContent>
                    1. Any valid Govt photo ID <br /> 2. Print out of Email
                    confirmation <br />
                    3. Gate pass <br />
                    4. Valid College ID for participants
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    Should I carry my ID card with me?
                  </AccordionTrigger>
                  <AccordionContent>
                    It is mandatory for all guest participants to carry college
                    IDs. This is for your own convenience. Moreover, you will be
                    asked to produce your college ID cards at the time of
                    allotment of rooms.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent
              className="w-[80%] p-8 border-2 bg-orange-400 bg-opacity-65"
              value="contact-us"
            >
              <div className=""></div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </>
  );
};

export default page;
