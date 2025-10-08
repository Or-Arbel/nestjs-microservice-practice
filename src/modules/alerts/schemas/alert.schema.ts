import { z } from 'zod';

export const CreateAlertSchema = z.object({
  name: z.string().min(1).max(100),
  create_date: z.iso.datetime(),
  location: z.object({
    // check later and fix if needed
    lat: z.number().min(29).max(34),
    lng: z.number().min(34).max(36),
  }),
  alerts: z.array(z.number().int().nonnegative()).nonempty(),
  status: z.number().min(1).max(6),
  description: z.string().min(1).max(500),
});

export const UpdateAlertSchema = CreateAlertSchema.extend({
  id: z.string(), // needed in order to  update a record
});

export type CreateAlertDto = z.infer<typeof CreateAlertSchema>;
export type UpdateAlertDto = z.infer<typeof UpdateAlertSchema>;
