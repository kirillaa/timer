timer = 0
set_time = 0

def on_button_pressed_a():
    global timer
    timer += 0 + 1
    basic.show_number(timer)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global timer
    timer += 0 - 1
    basic.show_number(timer)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_touched():
    global set_time
    basic.show_string("Start timer")
    basic.clear_screen()
    basic.show_string("" + str(timer) + "hr.")
    set_time = timer * 10000
    basic.pause(set_time)
    music.start_melody(music.built_in_melody(Melodies.NYAN), MelodyOptions.ONCE)
    basic.show_string("Time to eat")
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)
