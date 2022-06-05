# coding=utf-8
import glob
import os
from PIL import Image


path = './images/zxl.png'
im = Image.open(path)
size = 120, 120

im.thumbnail(size)

im.save('./images/nzxl.jpg', 'JPEG')
