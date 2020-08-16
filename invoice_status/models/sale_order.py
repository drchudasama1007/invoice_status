from odoo import api, fields, models, _

class SaleOrder(models.Model):
    _inherit = 'sale.order'

    paid_state = fields.Selection(string="Paid Status", compute='_compute_paid_state', selection=[('not_paid', "Not Paid"), ('paid', "Paid")])

    # for paid status of sale order
    @api.depends('invoice_status')
    def _compute_paid_state(self):
        for rec in self:
            rec_count = 0
            print("invoice_ids=================",len(rec.invoice_ids))
            if len(rec.invoice_ids) != 0:
                count = 0
                for inv in rec.invoice_ids:
                    if inv.invoice_payment_state == 'paid':
                        count += 1
                print("count=================", count)
                if count == len(rec.invoice_ids):
                    rec.paid_state = 'paid'
                else:
                    rec.paid_state = 'not_paid'
            else:
                rec.paid_state = 'not_paid'