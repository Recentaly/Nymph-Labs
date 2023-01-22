import pygame as pg
import time

pg.init()

running = True
MAX_FPS = 144

scene = "idle"

screen = pg.display.set_mode((1920,1022),vsync=False)
pg.display.set_caption(f"Nymph Documentation: Session started: {time.strftime('%H:%M')}")
pg.display.set_icon(pg.image.load("res\\icon\\icon.ico"))

idle = pg.image.load("res\\img\\idle.png").convert()

font = pg.font.Font("res\\font\\psf.ttf",24)

clock = pg.time.Clock()

class Main_ui(object):

    def __init__(self):

        BTN_file = pg.draw.rect(screen,("#D3D3D3"),pg.Rect(0,0,65,30))
        BTN_settings = pg.draw.rect(screen,("#D3D3D3"),pg.Rect(66,0,90,30))

        BTN_filetxt = font.render("File",True,(0,0,0))
        BTN_settingstxt = font.render("Settings",True,(0,0,0))
        screen.blit(BTN_filetxt,(15,0))
        screen.blit(BTN_settingstxt,(67,-1))

while (running):

    screen.fill((255,255,255))

    mousex, mousey = pg.mouse.get_pos()

    if scene == 'idle': screen.blit(idle,(0,0))

    pg.display.set_caption(f"Nymph Documentation: Session started: {time.strftime('%H:%M')} FPS: {int(clock.get_fps())}")

    MAIN = Main_ui()

    for event in pg.event.get():

        if event.type == pg.QUIT:

            running = False
            quit("The user has exited the program")

        if event.type == pg.MOUSEBUTTONDOWN:

            if mousex in range()


    clock.tick(MAX_FPS)
    pg.display.update()