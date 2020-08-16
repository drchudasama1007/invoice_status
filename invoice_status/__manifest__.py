# -*- coding: utf-8 -*-
##############################################################################
#
# Copyright 2018 Odoo Helper
# See LICENSE file for full copyright and licensing details.
#
##############################################################################
{
    'name': 'Invoice Status',
    'category': 'Sale',
    'summary': 'Invoice Status On Sale Order',

    'version': '0.1',
    'description': """
Invoice Status On Sale Order
==================
        This module allows Invoice Status Paid or Not Directly into Sale Order Form and Tree View
        """,

    'author': 'Odoo Helper',
    'license': 'AGPL-3',

    'depends': [
        'sale_management'
        ],
    'data': [
        'views/sale_order_view.xml',
    ],
    'images': ['images/OdooHelper.jpg'],
    'price': 3.42,
    'currency': 'USD',

    'installable': True,
    'application': False
}
