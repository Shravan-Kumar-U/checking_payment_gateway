# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

3:
#define trigPin 10
#define echoPin 9
#define soundPin 5
#define buzzerPin 8
long duration;
int distance;
int soundState;
void setup()
{
pinMode(trigPin, OUTPUT);
pinMode(echoPin, INPUT);
pinMode(soundPin, INPUT);
pinMode(buzzerPin, OUTPUT);
Serial.begin(9600);
}
void loop()
{ // Measure distance
 digitalWrite(trigPin, LOW);
 delayMicroseconds(2);
 digitalWrite(trigPin, HIGH);
 delayMicroseconds(10);
 digitalWrite(trigPin, LOW);
 duration = pulseIn(echoPin, HIGH);
 distance = duration * 0.034 / 2;
 soundState = digitalRead(soundPin);
 Serial.print("Distance: ");
 Serial.print(distance);
 Serial.print(" cm | Sound: ");
 Serial.println(soundState);
 if (distance < 50 || soundState == HIGH)
 {
 digitalWrite(buzzerPin, HIGH); // Alarm ON
 }
 else
 {
 digitalWrite(buzzerPin, LOW); // Alarm OFF
 }
 delay(200);
} 

4:
const int Motor_pin = 3;
int flag, Speed;
void setup()
{
 Serial.begin(9600);
 pinMode(Motor_pin, OUTPUT);
 Serial.println("Enter value from 50 to 255");
}
void loop()
{
 if (Serial.available() > 0)
 {
 Speed = Serial.parseInt();
 flag = 0;
 }
 if (Speed >= 50 && Speed <= 255)
 {
 analogWrite(Motor_pin, Speed);
 if (flag == 0)
 {
 Serial.print("Current speed is ");
 Serial.print(Speed);
 Serial.println(" PWM");
 flag=1;
 }
 }
}
