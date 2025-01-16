import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'shipmentTracking',
  title: 'Shipment Tracking',
  type: 'document',
  fields: [
    defineField({
      name: 'trackingNumber',
      title: 'Tracking Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'orderId',
      title: 'Order ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'carrier',
      title: 'Carrier',
      type: 'string',
      options: {
        list: [
          { title: 'FedEx', value: 'fedex' },
          { title: 'UPS', value: 'ups' },
          { title: 'DHL', value: 'dhl' },
          { title: 'USPS', value: 'usps' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Shipment Status',
      type: 'string',
      options: {
        list: [
          { title: 'In Transit', value: 'in_transit' },
          { title: 'Out for Delivery', value: 'out_for_delivery' },
          { title: 'Delivered', value: 'delivered' },
          { title: 'Exception', value: 'exception' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'estimatedDelivery',
      title: 'Estimated Delivery Date',
      type: 'datetime',
    }),
    defineField({
      name: 'deliveryAddress',
      title: 'Delivery Address',
      type: 'object',
      fields: [
        defineField({
          name: 'recipientName',
          title: 'Recipient Name',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'street',
          title: 'Street Address',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'city',
          title: 'City',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'state',
          title: 'State',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'postalCode',
          title: 'Postal Code',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'country',
          title: 'Country',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'trackingHistory',
      title: 'Tracking History',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'timestamp',
              title: 'Timestamp',
              type: 'datetime',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'location',
              title: 'Location',
              type: 'string',
            }),
            defineField({
              name: 'status',
              title: 'Status',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
    }),
  ],
});
