import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FaqSection = () => {
  return (
    <section className="section-container">
      <h2 className="section-title text-[#666666]">
        Frequently Asked Questions
      </h2>
      <div className="w-20 sm:w-24 h-1 sm:h-2 mt-4 mb-6 rounded-3xl bg-[#b36949]" />

      <div className="w-full">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What payment methods do you accept for online purchases?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                We accept all major online payment methods, including credit and
                debit cards, UPI (such as Google Pay, PhonePe, Paytm), net
                banking, and popular digital wallets. Cash on Delivery (COD) is
                also available for select locations. All transactions are
                processed securely to ensure a safe and smooth shopping
                experience.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Can I return an item if I'm not satisfied?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Yes! We want you to be completely satisfied with your purchase.
                If you're not happy with your item, you can return it within [X]
                days of delivery. Please ensure the item is unused, in its
                original packaging, and accompanied by the receipt or order
                confirmation. For more details, visit our Returns & Refunds
                policy page.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do you offer gift cards?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Yes! We offer gift cards that can be used to purchase any of our
                products. Gift cards are available in various denominations and
                can be redeemed online during checkout.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Is there a loyalty program for frequent shoppers?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Yes! We value our loyal customers. Our loyalty program rewards
                you with points for every purchase, which can be redeemed for
                discounts on future orders. Sign up for the program to start
                earning rewards today!
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
