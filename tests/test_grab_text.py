from unittest import TestCase
import tempfile
import unittest
#import mock
import urllib.request, urllib.parse, urllib.error
import json
import os
import sys
sys.path.append('..') 
import pagesetparser.pagesetparser as pagesetparser
from pptx import Presentation
from pptx.enum.shapes import MSO_SHAPE_TYPE
from pprint import pprint
import json
import io
import os
import math
import string
import unicodedata
from PIL import Image
from sys import argv
from pptx.enum.shapes import MSO_SHAPE
from pptx.enum.shapes import MSO_SHAPE_TYPE




class ovfTest(TestCase):

    CK20=None #This is the pageset




    def get_singleton_CK20(self):
        if not self.CK20:
           # prs = Presentation("tests/CK20V2cutdown.pptx")
            pagesetparser.gridSize=5
            self.CK20 = pagesetparser.Pageset("tests/testinputs/CK20V2cutdown.pptx","",pagesetparser.gridSize, False)
        return self.CK20

    def test_first(self):
         self.assertEqual(3,3)


    def test_col_row(self): 
        grids = self.get_singleton_CK20().grids
        self.assertEqual(grids[0].get_col_row(5083720,8158320),(4,3))
        self.assertEqual(grids[0].get_col_row(3609180,941940),(0,2))
        self.assertEqual(grids[0].get_col_row(1639980,2780820),(1,1))
        self.assertEqual(grids[0].get_col_row(1639980,8139780),(4,1))
        self.assertEqual(grids[0].get_col_row(1670400,2780820),(1,1))
        self.assertEqual(grids[0].get_col_row(1670400,4571820),(2,1))
        self.assertEqual(grids[0].get_col_row(1670400,6362460),(3,1))
        self.assertEqual(grids[0].get_col_row(1670400,8139780),(4,1))
        self.assertEqual(grids[0].get_col_row(1670400,8140500),(4,1))
        self.assertEqual(grids[0].get_col_row(1670400,952020),(0,1))
        self.assertEqual(grids[0].get_col_row(1670580,4571820),(2,1))
        self.assertEqual(grids[0].get_col_row(1680840,2780820),(1,1))
        self.assertEqual(grids[0].get_col_row(1682280,4558140),(2,1))
        self.assertEqual(grids[0].get_col_row(1685880,952020),(0,1))
        self.assertEqual(grids[0].get_col_row(1701000,4571820),(2,1))
        self.assertEqual(grids[0].get_col_row(1731240,4571820),(2,1))
        self.assertEqual(grids[0].get_col_row(1731240,6362460),(3,1))
        self.assertEqual(grids[0].get_col_row(1792080,2780820),(1,1))
        self.assertEqual(grids[0].get_col_row(1792080,8139780),(4,1))
        self.assertEqual(grids[0].get_col_row(2015100,7765740),(4,1))
        self.assertEqual(grids[0].get_col_row(2039760,4094640),(2,1))
        self.assertEqual(grids[0].get_col_row(2043180,2704860),(1,1))
        self.assertEqual(grids[0].get_col_row(2043180,2957940),(1,1))
        self.assertEqual(grids[0].get_col_row(2053322,2742516),(1,1))
        self.assertEqual(grids[0].get_col_row(2056860,5943060),(3,1))
        self.assertEqual(grids[0].get_col_row(2069280,945000),(0,1))
        self.assertEqual(grids[0].get_col_row(2069640,2773800),(1,1))
        self.assertEqual(grids[0].get_col_row(2084760,2755980),(1,1))
        self.assertEqual(grids[0].get_col_row(2085120,2780820),(1,1))
        self.assertEqual(grids[0].get_col_row(2085120,4571820),(2,1))
        self.assertEqual(grids[0].get_col_row(2085120,6362460),(3,1))
        self.assertEqual(grids[0].get_col_row(2085120,8139780),(4,1))
        self.assertEqual(grids[0].get_col_row(2085120,8140500),(4,1))
        self.assertEqual(grids[0].get_col_row(2085120,952020),(0,1))
        self.assertEqual(grids[0].get_col_row(2085120,977220),(0,1))
        self.assertEqual(grids[0].get_col_row(2088000,8191260),(4,1))
        self.assertEqual(grids[0].get_col_row(2095020,2552220),(1,1))
        self.assertEqual(grids[0].get_col_row(2095560,2780820),(1,1))
        self.assertEqual(grids[0].get_col_row(2098176,8138160),(4,1))
        self.assertEqual(grids[0].get_col_row(2102400,2681100),(1,1))
        self.assertEqual(grids[0].get_col_row(2102400,6262380),(3,1))
        self.assertEqual(grids[0].get_col_row(2104020,6371100),(3,1))
        self.assertEqual(grids[0].get_col_row(2107560,2780820),(1,1))
        self.assertEqual(grids[0].get_col_row(2117160,6314012),(3,1))
        self.assertEqual(grids[0].get_col_row(2138220,8080380),(4,1))
        self.assertEqual(grids[0].get_col_row(2138772,4606247),(2,1))
        self.assertEqual(grids[0].get_col_row(2158560,4599900),(2,1))
        self.assertEqual(grids[0].get_col_row(2167920,2820780),(1,1))
        self.assertEqual(grids[0].get_col_row(2170709,4607289),(2,1))
        self.assertEqual(grids[0].get_col_row(2178423,6313393),(3,1))
        self.assertEqual(grids[0].get_col_row(2180880,8029080),(4,1))
        self.assertEqual(grids[0].get_col_row(2185020,2988900),(1,1))
        self.assertEqual(grids[0].get_col_row(2188440,5007600),(2,1))
        self.assertEqual(grids[0].get_col_row(2189160,8254800),(4,1))
        self.assertEqual(grids[0].get_col_row(2194020,8244900),(4,1))
        self.assertEqual(grids[0].get_col_row(2200500,2583000),(1,1))
        self.assertEqual(grids[0].get_col_row(2206980,4190580),(2,1))
        self.assertEqual(grids[0].get_col_row(2209500,8208180),(4,1))
        self.assertEqual(grids[0].get_col_row(2210220,6323220),(3,1))
        self.assertEqual(grids[0].get_col_row(2218412,2780820),(1,1))
        self.assertEqual(grids[0].get_col_row(2218860,4562100),(2,1))
        self.assertEqual(grids[0].get_col_row(2220840,8141760),(4,1))
        self.assertEqual(grids[0].get_col_row(2222100,4660380),(2,1))
        self.assertEqual(grids[0].get_col_row(2222100,6362460),(3,1))
        self.assertEqual(grids[0].get_col_row(2225340,1002780),(0,1))
        self.assertEqual(grids[0].get_col_row(2226420,8017740),(4,1))
        self.assertEqual(grids[0].get_col_row(2227140,8488800),(4,1))
        self.assertEqual(grids[0].get_col_row(2228400,2800080),(1,1))
        self.assertEqual(grids[0].get_col_row(2233260,966420),(0,1))
        self.assertEqual(grids[0].get_col_row(2238660,6658380),(3,1))
        self.assertEqual(grids[0].get_col_row(2247480,5918040),(3,1))
        self.assertEqual(grids[0].get_col_row(2247660,2743020),(1,1))
        self.assertEqual(grids[0].get_col_row(2249460,6697260),(3,1))
        self.assertEqual(grids[0].get_col_row(2253780,2774700),(1,1))
        self.assertEqual(grids[0].get_col_row(2253780,4571460),(2,1))
        self.assertEqual(grids[0].get_col_row(2253960,6356160),(3,1))
        self.assertEqual(grids[0].get_col_row(2259565,6370200),(3,1))
        self.assertEqual(grids[0].get_col_row(2274480,2895120),(1,1))
        self.assertEqual(grids[0].get_col_row(2278620,4572720),(2,1))
        self.assertEqual(grids[0].get_col_row(2279340,4565340),(2,1))
        self.assertEqual(grids[0].get_col_row(2285640,2374560),(1,1))
        self.assertEqual(grids[0].get_col_row(2411640,2774700),(1,1))
        self.assertEqual(grids[0].get_col_row(2411640,6413248),(3,1))
        self.assertEqual(grids[0].get_col_row(2411640,8139780),(4,1))
        self.assertEqual(grids[0].get_col_row(2412540,8533980),(4,1))
        self.assertEqual(grids[0].get_col_row(2439444,4574324),(2,1))
        self.assertEqual(grids[0].get_col_row(2983500,6362460),(3,2))
        self.assertEqual(grids[0].get_col_row(2986200,6362460),(3,2))
        self.assertEqual(grids[0].get_col_row(2991060,2780820),(1,2))
        self.assertEqual(grids[0].get_col_row(2991060,4571820),(2,2))
        self.assertEqual(grids[0].get_col_row(3003840,6362460),(3,2))
        self.assertEqual(grids[0].get_col_row(3021480,2780820),(1,2))
        self.assertEqual(grids[0].get_col_row(3021480,4571820),(2,2))
        self.assertEqual(grids[0].get_col_row(3021480,8139780),(4,2))
        self.assertEqual(grids[0].get_col_row(3021480,952020),(0,2))
        self.assertEqual(grids[0].get_col_row(3028680,4571820),(2,2))
        self.assertEqual(grids[0].get_col_row(3028680,8140500),(4,2))
        self.assertEqual(grids[0].get_col_row(3028680,952020),(0,2))
        self.assertEqual(grids[0].get_col_row(3042000,6299820),(3,2))
        self.assertEqual(grids[0].get_col_row(3042000,6362460),(3,2))
        self.assertEqual(grids[0].get_col_row(3045420,2780820),(1,2))
        self.assertEqual(grids[0].get_col_row(3062160,2780820),(1,2))
        self.assertEqual(grids[0].get_col_row(3082320,4571820),(2,2))
        self.assertEqual(grids[0].get_col_row(3082320,8139780),(4,2))
        self.assertEqual(grids[0].get_col_row(3082320,952020),(0,2))
        self.assertEqual(grids[0].get_col_row(3102840,952020),(0,2))
        self.assertEqual(grids[0].get_col_row(3269340,5031360),(2,2))
        self.assertEqual(grids[0].get_col_row(3301920,2336040),(1,2))
        self.assertEqual(grids[0].get_col_row(3301920,3250440),(1,2))
        self.assertEqual(grids[0].get_col_row(334440,8139780),(4,0))
        self.assertEqual(grids[0].get_col_row(334440,952020),(0,0))
        self.assertEqual(grids[0].get_col_row(3352320,7772040),(4,2))
        self.assertEqual(grids[0].get_col_row(3359520,2811960),(1,2))
        self.assertEqual(grids[0].get_col_row(3359520,6621840),(3,2))
        self.assertEqual(grids[0].get_col_row(3375000,2938140),(1,2))
        self.assertEqual(grids[0].get_col_row(3400920,6362460),(3,2))
        self.assertEqual(grids[0].get_col_row(3400920,8139780),(4,2))
        self.assertEqual(grids[0].get_col_row(3401460,4598460),(2,2))
        self.assertEqual(grids[0].get_col_row(3407400,6307200),(3,2))
        self.assertEqual(grids[0].get_col_row(3428640,8140500),(4,2))
        self.assertEqual(grids[0].get_col_row(3428640,952020),(0,2))
        self.assertEqual(grids[0].get_col_row(3436200,2780820),(1,2))
        self.assertEqual(grids[0].get_col_row(3436200,4571820),(2,2))
        self.assertEqual(grids[0].get_col_row(3436200,952020),(0,2))
        self.assertEqual(grids[0].get_col_row(3436200,977220),(0,2))
        self.assertEqual(grids[0].get_col_row(3441780,8071200),(4,2))
        self.assertEqual(grids[0].get_col_row(3441780,8387280),(4,2))
        self.assertEqual(grids[0].get_col_row(3443400,4571820),(2,2))
        self.assertEqual(grids[0].get_col_row(3449160,8138160),(4,2))
        self.assertEqual(grids[0].get_col_row(3449160,8140500),(4,2))
        self.assertEqual(grids[0].get_col_row(3456720,2780820),(1,2))
        self.assertEqual(grids[0].get_col_row(3456720,4558140),(2,2))
        self.assertEqual(grids[0].get_col_row(3456720,4571820),(2,2))
        self.assertEqual(grids[0].get_col_row(3456720,6362460),(3,2))
        self.assertEqual(grids[0].get_col_row(3456720,8191260),(4,2))
        self.assertEqual(grids[0].get_col_row(3466620,6057540),(3,2))
        self.assertEqual(grids[0].get_col_row(3470400,4537080),(2,2))
        self.assertEqual(grids[0].get_col_row(3482280,826920),(0,2))
        self.assertEqual(grids[0].get_col_row(3484047,2812598),(1,2))
        self.assertEqual(grids[0].get_col_row(3492360,1267020),(0,2))
        self.assertEqual(grids[0].get_col_row(3493980,8142300),(4,2))
        self.assertEqual(grids[0].get_col_row(3496860,973620),(0,2))
        self.assertEqual(grids[0].get_col_row(3499584,4642596),(2,2))
        self.assertEqual(grids[0].get_col_row(3502959,6329022),(3,2))
        self.assertEqual(grids[0].get_col_row(3504780,898200),(0,2))
        self.assertEqual(grids[0].get_col_row(3506220,2817540),(1,2))
        self.assertEqual(grids[0].get_col_row(3516660,8471700),(4,2))
        self.assertEqual(grids[0].get_col_row(3518640,6393960),(3,2))
        self.assertEqual(grids[0].get_col_row(3523680,4571820),(2,2))
        self.assertEqual(grids[0].get_col_row(3536100,4603140),(2,2))
        self.assertEqual(grids[0].get_col_row(3537980,6362459),(3,2))
        self.assertEqual(grids[0].get_col_row(3538260,4343220),(2,2))
        self.assertEqual(grids[0].get_col_row(3548520,927000),(0,2))
        self.assertEqual(grids[0].get_col_row(3548700,8197020),(4,2))
        self.assertEqual(grids[0].get_col_row(3557160,4900320),(2,2))
        self.assertEqual(grids[0].get_col_row(3565620,6413220),(3,2))
        self.assertEqual(grids[0].get_col_row(3566160,2820420),(1,2))
        self.assertEqual(grids[0].get_col_row(3567060,996660),(0,2))
        self.assertEqual(grids[0].get_col_row(3568500,2755620),(1,2))
        self.assertEqual(grids[0].get_col_row(3568500,7708140),(4,2))
        self.assertEqual(grids[0].get_col_row(3569760,2800080),(1,2))
        self.assertEqual(grids[0].get_col_row(3570480,1000800),(0,2))
        self.assertEqual(grids[0].get_col_row(3576780,6291000),(3,2))
        self.assertEqual(grids[0].get_col_row(3580920,2822040),(1,2))
        self.assertEqual(grids[0].get_col_row(3580920,4571640),(2,2))
        self.assertEqual(grids[0].get_col_row(3580920,990360),(0,2))
        self.assertEqual(grids[0].get_col_row(3583440,8178480),(4,2))
        self.assertEqual(grids[0].get_col_row(3584340,4552560),(2,2))
        self.assertEqual(grids[0].get_col_row(3585960,8094960),(4,2))
        self.assertEqual(grids[0].get_col_row(3587400,983880),(0,2))
        self.assertEqual(grids[0].get_col_row(3594960,2749320),(1,2))
        self.assertEqual(grids[0].get_col_row(3600000,2800080),(1,2))
        self.assertEqual(grids[0].get_col_row(3600360,970920),(0,2))
        self.assertEqual(grids[0].get_col_row(3608280,4574160),(2,2))
        self.assertEqual(grids[0].get_col_row(3609180,941940),(0,2))
        self.assertEqual(grids[0].get_col_row(3655800,6357240),(3,2))
        self.assertEqual(grids[0].get_col_row(3669840,6507900),(3,2))
        self.assertEqual(grids[0].get_col_row(3756240,2793240),(1,2))
        self.assertEqual(grids[0].get_col_row(3756240,6431788),(3,2))
        self.assertEqual(grids[0].get_col_row(3756240,8158320),(4,2))
        self.assertEqual(grids[0].get_col_row(3770712,918000),(0,2))
        self.assertEqual(grids[0].get_col_row(3784044,4592864),(2,2))
        self.assertEqual(grids[0].get_col_row(3786840,938340),(0,2))
        self.assertEqual(grids[0].get_col_row(4306860,2780820),(1,3))
        self.assertEqual(grids[0].get_col_row(4306860,4571820),(2,3))
        self.assertEqual(grids[0].get_col_row(4306860,952020),(0,3))
        self.assertEqual(grids[0].get_col_row(4322160,2780820),(1,3))
        self.assertEqual(grids[0].get_col_row(4327380,4564260),(2,3))
        self.assertEqual(grids[0].get_col_row(4337280,2780820),(1,3))
        self.assertEqual(grids[0].get_col_row(4337280,4571820),(2,3))
        self.assertEqual(grids[0].get_col_row(4337280,6362460),(3,3))
        self.assertEqual(grids[0].get_col_row(4337280,8139780),(4,3))
        self.assertEqual(grids[0].get_col_row(4337280,952020),(0,3))
        self.assertEqual(grids[0].get_col_row(4343040,6310980),(3,3))
        self.assertEqual(grids[0].get_col_row(4357620,959580),(0,3))
        self.assertEqual(grids[0].get_col_row(4357800,4571820),(2,3))
        self.assertEqual(grids[0].get_col_row(4357800,6343380),(3,3))
        self.assertEqual(grids[0].get_col_row(4357800,8114940),(4,3))
        self.assertEqual(grids[0].get_col_row(4357800,8140500),(4,3))
        self.assertEqual(grids[0].get_col_row(4380480,952020),(0,3))
        self.assertEqual(grids[0].get_col_row(4398120,2780820),(1,3))
        self.assertEqual(grids[0].get_col_row(4398120,4571820),(2,3))
        self.assertEqual(grids[0].get_col_row(4398120,8139780),(4,3))
        self.assertEqual(grids[0].get_col_row(4398120,952020),(0,3))
        self.assertEqual(grids[0].get_col_row(4418640,2780820),(1,3))
        self.assertEqual(grids[0].get_col_row(4428540,6362460),(3,3))
        self.assertEqual(grids[0].get_col_row(4430160,952020),(0,3))
        self.assertEqual(grids[0].get_col_row(4489380,8139780),(4,3))
        self.assertEqual(grids[0].get_col_row(4640400,8721540),(4,3))
        self.assertEqual(grids[0].get_col_row(4641120,6622200),(3,3))
        self.assertEqual(grids[0].get_col_row(4652460,6651180),(3,3))
        self.assertEqual(grids[0].get_col_row(4672800,6057360),(3,3))
        self.assertEqual(grids[0].get_col_row(4701420,973260),(0,3))
        self.assertEqual(grids[0].get_col_row(4717440,6711840),(3,3))
        self.assertEqual(grids[0].get_col_row(4724640,8304840),(4,3))
        self.assertEqual(grids[0].get_col_row(4752000,2780820),(1,3))
        self.assertEqual(grids[0].get_col_row(4752000,4571820),(2,3))
        self.assertEqual(grids[0].get_col_row(4752000,6362460),(3,3))
        self.assertEqual(grids[0].get_col_row(4752000,8139780),(4,3))
        self.assertEqual(grids[0].get_col_row(4752000,952020),(0,3))
        self.assertEqual(grids[0].get_col_row(4752000,977220),(0,3))
        self.assertEqual(grids[0].get_col_row(4762260,2476260),(1,3))
        self.assertEqual(grids[0].get_col_row(4762260,4305060),(2,3))
        self.assertEqual(grids[0].get_col_row(4762260,5905260),(3,3))
        self.assertEqual(grids[0].get_col_row(4762260,7886340),(4,3))
        self.assertEqual(grids[0].get_col_row(4766940,4571820),(2,3))
        self.assertEqual(grids[0].get_col_row(4768380,2774700),(1,3))
        self.assertEqual(grids[0].get_col_row(4768380,3003300),(1,3))
        self.assertEqual(grids[0].get_col_row(4770180,4095540),(2,3))
        self.assertEqual(grids[0].get_col_row(4772520,2780820),(1,3))
        self.assertEqual(grids[0].get_col_row(4772520,4571820),(2,3))
        self.assertEqual(grids[0].get_col_row(4772520,6362460),(3,3))
        self.assertEqual(grids[0].get_col_row(4772520,8140500),(4,3))
        self.assertEqual(grids[0].get_col_row(4772520,8191260),(4,3))
        self.assertEqual(grids[0].get_col_row(4772520,952020),(0,3))
        self.assertEqual(grids[0].get_col_row(4775400,4564260),(2,3))
        self.assertEqual(grids[0].get_col_row(4778448,8143240),(4,3))
        self.assertEqual(grids[0].get_col_row(4785840,2780820),(1,3))
        self.assertEqual(grids[0].get_col_row(4785840,959580),(0,3))
        self.assertEqual(grids[0].get_col_row(4800060,8380980),(4,3))
        self.assertEqual(grids[0].get_col_row(4800240,4679460),(2,3))
        self.assertEqual(grids[0].get_col_row(4800420,4255920),(2,3))
        self.assertEqual(grids[0].get_col_row(4802940,494820),(0,3))
        self.assertEqual(grids[0].get_col_row(4809288,2753121),(1,3))
        self.assertEqual(grids[0].get_col_row(4812732,8139779),(4,3))
        self.assertEqual(grids[0].get_col_row(4826190,941921),(0,3))
        self.assertEqual(grids[0].get_col_row(4828320,4752360),(2,3))
        self.assertEqual(grids[0].get_col_row(4828500,5029020),(2,3))
        self.assertEqual(grids[0].get_col_row(4830660,3136500),(1,3))
        self.assertEqual(grids[0].get_col_row(4833401,8149204),(4,3))
        self.assertEqual(grids[0].get_col_row(4838040,6285960),(3,3))
        self.assertEqual(grids[0].get_col_row(4839840,1155600),(0,3))
        self.assertEqual(grids[0].get_col_row(4841324,2767272),(1,3))
        self.assertEqual(grids[0].get_col_row(4843440,1402920),(0,3))
        self.assertEqual(grids[0].get_col_row(4851720,4609800),(2,3))
        self.assertEqual(grids[0].get_col_row(4859280,482040),(0,3))
        self.assertEqual(grids[0].get_col_row(4859820,926820),(0,3))
        self.assertEqual(grids[0].get_col_row(4863780,998460),(0,3))
        self.assertEqual(grids[0].get_col_row(4869900,997020),(0,3))
        self.assertEqual(grids[0].get_col_row(4879260,8320860),(4,3))
        self.assertEqual(grids[0].get_col_row(4879800,2787300),(1,3))
        self.assertEqual(grids[0].get_col_row(4882320,6343560),(3,3))
        self.assertEqual(grids[0].get_col_row(4885560,4933440),(2,3))
        self.assertEqual(grids[0].get_col_row(4885920,6391080),(3,3))
        self.assertEqual(grids[0].get_col_row(4887900,8159220),(4,3))
        self.assertEqual(grids[0].get_col_row(4888620,6412500),(3,3))
        self.assertEqual(grids[0].get_col_row(4894020,6397740),(3,3))
        self.assertEqual(grids[0].get_col_row(4895640,8210160),(4,3))
        self.assertEqual(grids[0].get_col_row(4896360,3033720),(1,3))
        self.assertEqual(grids[0].get_col_row(4896720,4584960),(2,3))
        self.assertEqual(grids[0].get_col_row(4908060,8197740),(4,3))
        self.assertEqual(grids[0].get_col_row(4909728,2780820),(1,3))
        self.assertEqual(grids[0].get_col_row(4910940,4235220),(2,3))
        self.assertEqual(grids[0].get_col_row(4912920,6371100),(3,3))
        self.assertEqual(grids[0].get_col_row(4919760,2481120),(1,3))
        self.assertEqual(grids[0].get_col_row(4921020,958500),(0,3))
        self.assertEqual(grids[0].get_col_row(4924800,2767680),(1,3))
        self.assertEqual(grids[0].get_col_row(4930740,4540500),(2,3))
        self.assertEqual(grids[0].get_col_row(4935600,2488680),(1,3))
        self.assertEqual(grids[0].get_col_row(4945860,6407100),(3,3))
        self.assertEqual(grids[0].get_col_row(4946220,983700),(0,3))
        self.assertEqual(grids[0].get_col_row(4953060,6317640),(3,3))
        self.assertEqual(grids[0].get_col_row(4976100,8229240),(4,3))
        self.assertEqual(grids[0].get_col_row(4991400,8115840),(4,3))
        self.assertEqual(grids[0].get_col_row(4994640,4773600),(2,3))
        self.assertEqual(grids[0].get_col_row(4997520,4571640),(2,3))
        self.assertEqual(grids[0].get_col_row(5031864,920356),(0,3))
        self.assertEqual(grids[0].get_col_row(5083720,2793240),(1,3))
        self.assertEqual(grids[0].get_col_row(5083720,6431788),(3,3))
        self.assertEqual(grids[0].get_col_row(5111524,4592864),(2,3))
        self.assertEqual(grids[0].get_col_row(5225760,4285980),(2,3))
        self.assertEqual(grids[0].get_col_row(5678460,4571820),(2,4))
        self.assertEqual(grids[0].get_col_row(5688720,952020),(0,4))
        self.assertEqual(grids[0].get_col_row(5693760,2755980),(1,4))
        self.assertEqual(grids[0].get_col_row(5695560,4571820),(2,4))
        self.assertEqual(grids[0].get_col_row(5708880,2780820),(1,4))
        self.assertEqual(grids[0].get_col_row(5708880,4571820),(2,4))
        self.assertEqual(grids[0].get_col_row(5708880,6362460),(3,4))
        self.assertEqual(grids[0].get_col_row(5708880,8139780),(4,4))
        self.assertEqual(grids[0].get_col_row(5708880,952020),(0,4))
        self.assertEqual(grids[0].get_col_row(5729400,2780820),(1,4))
        self.assertEqual(grids[0].get_col_row(5729400,4571820),(2,4))
        self.assertEqual(grids[0].get_col_row(5729400,4573260),(2,4))
        self.assertEqual(grids[0].get_col_row(5729400,6343380),(3,4))
        self.assertEqual(grids[0].get_col_row(5729400,6362460),(3,4))
        self.assertEqual(grids[0].get_col_row(5729400,8139780),(4,4))
        self.assertEqual(grids[0].get_col_row(5729400,927180),(0,4))
        self.assertEqual(grids[0].get_col_row(5729400,952020),(0,4))
        self.assertEqual(grids[0].get_col_row(5769720,2780820),(1,4))
        self.assertEqual(grids[0].get_col_row(5769720,952020),(0,4))
        self.assertEqual(grids[0].get_col_row(5851080,4571820),(2,4))
        self.assertEqual(grids[0].get_col_row(6026040,6788160),(3,4))
        self.assertEqual(grids[0].get_col_row(6051863,8127854),(4,4))
        self.assertEqual(grids[0].get_col_row(6058080,5904720),(3,4))
        self.assertEqual(grids[0].get_col_row(6082020,519660),(0,4))
        self.assertEqual(grids[0].get_col_row(6088680,1378440),(0,4))
        self.assertEqual(grids[0].get_col_row(6109745,4571820),(2,4))
        self.assertEqual(grids[0].get_col_row(6118740,952020),(0,4))
        self.assertEqual(grids[0].get_col_row(6123600,2755980),(1,4))
        self.assertEqual(grids[0].get_col_row(6123600,2780820),(1,4))
        self.assertEqual(grids[0].get_col_row(6123600,4564260),(2,4))
        self.assertEqual(grids[0].get_col_row(6123600,4571820),(2,4))
        self.assertEqual(grids[0].get_col_row(6123600,6362460),(3,4))
        self.assertEqual(grids[0].get_col_row(6123600,8127360),(4,4))
        self.assertEqual(grids[0].get_col_row(6123600,8139780),(4,4))
        self.assertEqual(grids[0].get_col_row(6123600,8140500),(4,4))
        self.assertEqual(grids[0].get_col_row(6123600,952020),(0,4))
        self.assertEqual(grids[0].get_col_row(6123600,964440),(0,4))
        self.assertEqual(grids[0].get_col_row(6133860,414900),(0,4))
        self.assertEqual(grids[0].get_col_row(6137809,996660),(0,4))
        self.assertEqual(grids[0].get_col_row(6144120,2780820),(1,4))
        self.assertEqual(grids[0].get_col_row(6144120,4571820),(2,4))
        self.assertEqual(grids[0].get_col_row(6144120,6362460),(3,4))
        self.assertEqual(grids[0].get_col_row(6144120,8140500),(4,4))
        self.assertEqual(grids[0].get_col_row(6144120,8165340),(4,4))
        self.assertEqual(grids[0].get_col_row(6144120,952020),(0,4))
        self.assertEqual(grids[0].get_col_row(6144120,977220),(0,4))
        self.assertEqual(grids[0].get_col_row(6148080,1042920),(0,4))
        self.assertEqual(grids[0].get_col_row(6149714,4564888),(2,4))
        self.assertEqual(grids[0].get_col_row(6152090,1009372),(0,4))
        self.assertEqual(grids[0].get_col_row(6162510,6328851),(3,4))
        self.assertEqual(grids[0].get_col_row(6164280,2704500),(1,4))
        self.assertEqual(grids[0].get_col_row(6164640,1378440),(0,4))
        self.assertEqual(grids[0].get_col_row(6173741,8119815),(4,4))
        self.assertEqual(grids[0].get_col_row(6192552,2821680),(1,4))
        self.assertEqual(grids[0].get_col_row(6195600,6370200),(3,4))
        self.assertEqual(grids[0].get_col_row(6202680,4509018),(2,4))
        self.assertEqual(grids[0].get_col_row(6202980,1104480),(0,4))
        self.assertEqual(grids[0].get_col_row(6203520,2787120),(1,4))
        self.assertEqual(grids[0].get_col_row(6210000,4571640),(2,4))
        self.assertEqual(grids[0].get_col_row(6212340,4584060),(2,4))
        self.assertEqual(grids[0].get_col_row(6216159,997560),(0,4))
        self.assertEqual(grids[0].get_col_row(6218280,5028840),(2,4))
        self.assertEqual(grids[0].get_col_row(6218460,6370740),(3,4))
        self.assertEqual(grids[0].get_col_row(6220260,8147001),(4,4))
        self.assertEqual(grids[0].get_col_row(6224220,2741220),(1,4))
        self.assertEqual(grids[0].get_col_row(6226200,8067040),(4,4))
        self.assertEqual(grids[0].get_col_row(6234660,748260),(0,4))
        self.assertEqual(grids[0].get_col_row(6235740,1358820),(0,4))
        self.assertEqual(grids[0].get_col_row(6237720,4086720),(2,4))
        self.assertEqual(grids[0].get_col_row(6241500,615420),(0,4))
        self.assertEqual(grids[0].get_col_row(6245820,4478220),(2,4))
        self.assertEqual(grids[0].get_col_row(6248160,1142640),(0,4))
        self.assertEqual(grids[0].get_col_row(6255000,2773440),(1,4))
        self.assertEqual(grids[0].get_col_row(6267060,971460),(0,4))
        self.assertEqual(grids[0].get_col_row(6273900,6578460),(3,4))
        self.assertEqual(grids[0].get_col_row(6277500,2700900),(1,4))
        self.assertEqual(grids[0].get_col_row(6279300,6368940),(3,4))
        self.assertEqual(grids[0].get_col_row(6279840,6349680),(3,4))
        self.assertEqual(grids[0].get_col_row(6285960,4609800),(2,4))
        self.assertEqual(grids[0].get_col_row(6287040,939600),(0,4))
        self.assertEqual(grids[0].get_col_row(6295680,8134200),(4,4))
        self.assertEqual(grids[0].get_col_row(6302160,4173120),(2,4))
        self.assertEqual(grids[0].get_col_row(6302160,5968800),(3,4))
        self.assertEqual(grids[0].get_col_row(6303960,2341440),(1,4))
        self.assertEqual(grids[0].get_col_row(6305400,685440),(0,4))
        self.assertEqual(grids[0].get_col_row(6311880,5016600),(2,4))
        self.assertEqual(grids[0].get_col_row(6313140,2830140),(1,4))
        self.assertEqual(grids[0].get_col_row(6317640,3130560),(1,4))
        self.assertEqual(grids[0].get_col_row(6319620,4584600),(2,4))
        self.assertEqual(grids[0].get_col_row(6390360,4533480),(2,4))
        self.assertEqual(grids[0].get_col_row(6417432,951480),(0,4))
        self.assertEqual(grids[0].get_col_row(6442619,2802960),(1,4))
        self.assertEqual(grids[0].get_col_row(733680,8139780),(4,0))
        self.assertEqual(grids[0].get_col_row(733680,952020),(0,0))
        self.assertEqual(grids[0].get_col_row(750600,3751620),(2,0))
        self.assertEqual(grids[0].get_col_row(820080,952200),(0,0))
        self.assertEqual(grids[0].get_col_row(844380,8159580),(4,0))
        self.assertEqual(grids[0].get_col_row(845820,3599460),(1,0))



    def test_read_CK20_and_count_slides(self):
        grids = self.get_singleton_CK20().grids
        self.assertEqual(len(grids),10)


    def test_read_CK20_and_check_titles(self):
        grids = self.get_singleton_CK20().grids
        self.assertEqual(grids[0].tag,pagesetparser.make_title("Top page"))


    def test_read_CK20_and_check_color(self):
        grids = self.get_singleton_CK20().grids
        self.assertEqual(grids[0].colors[2][2],(255,125,236))

    def test_create_manifest(self):
        with tempfile.NamedTemporaryFile() as tmp:
            pagesetparser.create_ovf_manifest(tmp.name)
            with open('tests/testinputs/test_manifest.json', 'r') as f:
                  local = json.load(f)
            with open(tmp.name, 'r') as f:
                    real = json.load(f)
                    assert real == local
        return False


    def test_create_obf_object(self):
        grids = self.get_singleton_CK20().grids
        obf=pagesetparser.create_obf_object(grids[0])
        import json
        with tempfile.NamedTemporaryFile() as tmp:
            with open(tmp.name, 'w') as outfile:
                json.dump(obf, outfile, sort_keys=True, indent=2)
            self.maxDiff = None
            self.assertMultiLineEqual(open('tests/testtargets/singleobffile.obf').read().strip(),open(tmp.name).read().strip())


    def test_read_CK20_and_check_link(self):
        grids = self.get_singleton_CK20().grids
        self.assertNotEqual(grids[0].links[4][1],"")




    def test_read_CK20_and_check_link_neg(self):
        grids = self.get_singleton_CK20().grids
        self.assertEqual(grids[0].links[1][1],"")

    def test_make_title(self):
        tag = pagesetparser.make_title("A sentance")
        self.assertEqual(tag,"asentance")

    def test_make_title_2(self):
        tag = pagesetparser.make_title("ThInGs In MiXeD cAsE")
        self.assertEqual(tag,"thingsinmixedcase")

    def test_make_title_3(self):
        tag = pagesetparser.make_title("Sysbols#")
        self.assertEqual(tag,"sysbols")


#    def test_warning_for_missinglink(self):
#        pageset = self.get_singleton_CK20()
#        feedback=pageset.getfeedback()
#        print(feedback)
#        self.assertEqual(26,len(feedback))


#    def test_warning_for_missingimage(self):
#        #This test is broken because we CAN'T switch warnings on and off around a singleton
#        pageset = self.get_singleton_CK20()
#        feedback=pageset.getfeedback()
#        pagesetparser.IMAGE_WARNING=True
#        print feedback
#        self.assertEqual(90,len(feedback))



#    def test_correct_warning_for_blank_file(self):
#        pagesetparser.gridSize=5
#        pageset = pagesetparser.Pageset("blank.pptx","",False)
#        print "################################################################################"
#        feedback= pageset.getfeedback()
#        self.assertEqual(21,len(feedback))







if __name__=="__main__":
    unittest.main()
