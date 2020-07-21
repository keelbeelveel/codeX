// List modified: Tue July 21, 2020 @ 12:16:37 EDT
let preview = {};
var language_list = [
    {
        displayText: 'Auto',
        fileTypes: [{
                type: '.*',
                common: true
            }],
        apiId: 'auto',
        prettyName: 'Automatic Highlight', // Experimental, does nothing
        cdxEnabled: false
    },{
        displayText: '1C:Enterprise',
        fileTypes: [{ }],
        apiId: '1c',
        cdxEnabled: false
    },{
        displayText: 'Augmented Backus-Naur Form',
        fileTypes: [{ 
            type: '.abnf',
            common: false
        },{
            type: '.bnf',
            common: false
        }],
        apiId: 'abnf',
        cdxEnabled: false
    },{
        displayText: 'Apache Access Log',
        fileTypes: [{ }],
        apiId: 'accesslog',
        cdxEnabled: false
    },{
        displayText: 'Action Script',
        fileTypes: [{
            type: '.actionscript',
            common: true
        },{
            type: '.as',
            common: true
        }],
        apiId: 'actionscript',
        cdxEnabled: false
    },{
        displayText: 'Ada',
        fileTypes: [{ 
            type: '.ada',
            common: true
        }],
        apiId: 'ada',
        cdxEnabled: false
    },{
        displayText: 'AngelScript',
        fileTypes: [{ 
            type: '.as',
            common: true
        }],
        apiId: 'angelscript',
        cdxEnabled: false
    },{
        displayText: 'Apache Config',
        fileTypes: [{
            type: '.conf',
            common: true
        }],
        apiId: 'apache',
        cdxEnabled: false
    },{
        displayText: 'AppleScript',
        fileTypes: [{
            type: '.scpt',
            common: true
        }],
        apiId: 'applescript',
        cdxEnabled: false
    },{
        displayText: 'ArcGIS Arcade',
        fileTypes: [{
            type: '.mxd',
            common: true
        },{
            type: '.3dd',
            common: false
        },{
            type: '.adf',
            common: false
        },{
            type: '.apl',
            common: false
        },{
            type: '.apr',
            common: false
        },{
            type: '.dgn',
            common: false
        },{
            type: '.e00',
            common: false
        },{
            type: '.flt',
            common: false
        },{
            type: '.gen',
            common: false
        },{
            type: '.lpk',
            common: false
        },{
            type: '.mpk',
            common: false
        },{
            type: '.msd',
            common: false
        },{
            type: '.nmf',
            common: false
        },{
            type: '.pix',
            common: false
        },{
            type: '.prj',
            common: false
        },{
            type: '.rdf',
            common: false
        },{
            type: '.rlf',
            common: false
        },{
            type: '.style',
            common: false
        },{
            type: '.sxd',
            common: false
        }],
        apiId: 'arcade',
        cdxEnabled: false
    },{
        displayText: 'Arduino',
        fileTypes: [{
            type: '.ino',
            common: true
        }],
        apiId: 'arduino',
        cdxEnabled: false
    },{
        displayText: 'ARM Assembly',
        fileTypes: [{
            type: '.s',
            common: true
        }],
        apiId: 'armasm',
        cdxEnabled: false
    },{
        displayText: 'AsciiDoc',
        fileTypes: [{
            type: '.txt',
            common: true
        }],
        apiId: 'asciidoc',
        cdxEnabled: false
    },{
        displayText: 'AspectJ',
        fileTypes: [{
            type: '.aj',
            common: true
        }],
        apiId: 'aspectj',
        cdxEnabled: false
    },{
        displayText: 'AutoHotkey',
        fileTypes: [{
            type: '.ahk',
            common: true
        }],
        apiId: 'autohotkey',
        cdxEnabled: false
    },{
        displayText: 'AutoIt',
        fileTypes: [{
            type: '.au3',
            common: true
        }],
        apiId: 'autoit',
        cdxEnabled: false
    },{
        displayText: 'AVR Assembly',
        fileTypes: [{
            type: '.asm',
            common: true
        }],
        apiId: 'avrasm',
        cdxEnabled: false
    },{
        displayText: 'Awk',
        fileTypes: [{
            type: '.awk',
            common: true
        }],
        apiId: 'awk',
        cdxEnabled: false
    },{
        displayText: 'MS Axapta/Dynamics AX',
        fileTypes: [{
            type: '.ald',
            common: 'false'
        },{
            type: '.alc',
            common: 'false'
        },{
            type: '.ali',
            common: 'false'
        },{
            type: '.alt',
            common: 'false'
        },{
            type: '.aoi',
            common: 'false'
        },{
            type: '.add',
            common: 'false'
        },{
            type: '.adi',
            common: 'false'
        },{
            type: '.ahd',
            common: 'false'
        },{
            type: '.ahi',
            common: 'false'
        },{
            type: '.aod',
            common: 'false'
        },{
            type: '.khd',
            common: 'false'
        },{
            type: '.khi',
            common: 'false'
        },{
            type: '.ktd',
            common: 'false'
        },{
            type: 'kti',
            common: 'false'
        },{
            type: '.auc',
            common: 'false'
        },{
            type: '.aoc',
            common: 'false'
        }],
        apiId: 'axapta',
        cdxEnabled: false
    },{
        displayText: 'Bash',
        fileTypes: [
            {
                type: '.bash',
                common: false
            },{
                type: '.bashrc',
                common: false
            },{
                type: '.sh',
                common: true
            },{
                type: '.zsh',
                common: true
            }],
        apiId: 'bash',
        cdxEnabled: true
    },{
        displayText: 'BASIC',
        fileTypes: [{}],
        apiId: 'basic',
        cdxEnabled: false
    },{
        displayText: 'Backus-Naur Form',
        fileTypes: [{
            type: '.bnf',
            common: true
        }],
        apiId: 'bnf',
        cdxEnabled: false
    },{
        displayText: 'Brainfuck',
        fileTypes: [{}],
        apiId: 'brainfuck',
        cdxEnabled: false
    },{
        displayText: 'C',
        fileTypes: [{
            type: '.c',
            common: true
        }],
        apiId: 'c',
        cdxEnabled: false
    },{
        displayText: 'C/AL',
        fileTypes: [{}],
        apiId: 'cal',
        cdxEnabled: false
    },{
        displayText: "Cap'n Proto",
        fileTypes: [{}],
        apiId: 'capnproto',
        cdxEnabled: false
    },{
        displayText: 'Ceylon',
        fileTypes: [{}],
        apiId: 'ceylon',
        cdxEnabled: false
    },{
        displayText: 'Clean',
        fileTypes: [{}],
        apiId: 'clean',
        cdxEnabled: false
    },{
        displayText: 'Clojure',
        fileTypes: [{}],
        apiId: 'clojure',
        cdxEnabled: false
    },{
        displayText: 'Clojure REPL',
        fileTypes: [{}],
        apiId: 'clojure-repl',
        cdxEnabled: false
    },{
        displayText: 'CMake',
        fileTypes: [{}],
        apiId: 'cmake',
        cdxEnabled: false
    },{
        displayText: 'CoffeeScript',
        fileTypes: [{}],
        apiId: 'coffeescript',
        cdxEnabled: false
    },{
        displayText: 'Coq',
        fileTypes: [{}],
        apiId: 'coq',
        cdxEnabled: false
    },{
        displayText: 'Caché Object Script',
        fileTypes: [{}],
        apiId: 'cos',
        cdxEnabled: false
    },{
        displayText: 'C++',
        fileTypes: [{
            type: '.cpp',
            common: true
        }],
        apiId: 'cpp',
        cdxEnabled: false
    },{
        displayText:'crmsh',
        fileTypes: [{}],
        apiId: 'crmsh',
        cdxEnabled: false
    },{
        displayText: 'Crystal',
        fileTypes: [{}],
        apiId: 'crystal',
        cdxEnabled: false
    },{
        displayText: 'C#',
        fileTypes: [{
            type: '.c#',
            common: true
        }],
        apiId: 'csharp',
        cdxEnabled: false
    },{
        displayText: 'CSP',
        fileTypes: [{}],
        apiId: 'csp',
        cdxEnabled: false
    },{
        displayText: 'CSS',
        fileTypes: [{}],
        apiId: 'css',
        cdxEnabled: false
    },{
        displayText: 'D',
        fileTypes: [{}],
        apiId: 'd',
        cdxEnabled: false
    },{
        displayText: 'Dart',
        fileTypes: [{}],
        apiId: 'dart',
        cdxEnabled: false
    },{
        displayText: 'Delphi',
        fileTypes: [{}],
        apiId: 'delphi',
        cdxEnabled: false
    },{
        displayText: 'Diff',
        fileTypes: [{}],
        apiId: 'diff',
        cdxEnabled: false
    },{
        displayText: 'Django',
        fileTypes: [{}],
        apiId: 'django',
        cdxEnabled: false
    },{
        displayText: 'DNS Zone',
        fileTypes: [{}],
        apiId: 'dns',
        cdxEnabled: false
    },{
        displayText: 'Dockerfile',
        fileTypes: [{}],
        apiId: 'dockerfile',
        cdxEnabled: false
    },{
        displayText: 'DOS Batch file',
        fileTypes: [{
            type: '.bat',
            common: true
        }],
        apiId: 'dos',
        cdxEnabled: false
    },{
        displayText: 'dsconfig',
        fileTypes: [{}],
        apiId: 'dsconfig',
        cdxEnabled: false
    },{
        displayText: 'Device Tree',
        fileTypes: [{}],
        apiId: 'dts',
        cdxEnabled: false
    },{
        displayText: 'Dust',
        fileTypes: [{}],
        apiId: 'dust',
        cdxEnabled: false
    },{
        displayText: 'Extended Backus-Naur Form',
        fileTypes: [{
            type: '.bnf',
            common: true
        }],
        apiId:'ebnf',
        cdxEnabled: false
    },{
        displayText:'Elixir',
        fileTypes: [{}],
        apiId: 'elixir',
        cdxEnabled: false
    },{
        displayText: 'Elm',
        fileTypes: [{}],
        apiId: 'elm',
        cdxEnabled: false
    },{
        displayText: 'ERB (Embedded Ruby)',
        fileTypes: [{
            type: '.ruby',
            common: true
        }],
        apiId: 'erb',
        cdxEnabled: false
    },{
        displayText: 'Erlang REPL',
        fileTypes: [{}],
        apiId: 'erlang-repl',
        cdxEnabled: false
    },{
        displayText: 'Erlang',
        fileTypes: [{}],
        apiId: 'erlang',
        cdxEnabled: false
    },{
        displayText: 'MS Excel Formulae',
        fileTypes: [{}],
        apiId: 'excel',
        cdxEnabled: false
    },{
        displayText: 'Fix',
        fileTypes: [{}],
        apiId: 'fix',
        cdxEnabled: false
    },{
        displayText: 'Flix',
        fileTypes: [{}],
        apiId: 'flix',
        cdxEnabled: false
    },{
        displayText: 'Fortran',
        fileTypes: [{}],
        apiId: 'fortran',
        cdxEnabled: false
    },{
        displayText: 'F#',
        fileTypes: [{}],
        apiId: 'fsharp',
        cdxEnabled: false
    },{
        displayText: 'GAMS',
        fileTypes: [{}],
        apiId: 'gams',
        cdxEnabled: false
    },{
        displayText: 'GAUSS',
        fileTypes: [{}],
        apiId: 'gauss',
        cdxEnabled: false
    },{
        displayText: 'G-Code (ISO 6983)',
        fileTypes: [{}],
        apiId: 'gcode',
        cdxEnabled: false
    },{
        displayText: 'Gherkin',
        fileTypes: [{}],
        apiId: 'gherkin',
        cdxEnabled: false
    },{
        displayText: 'GLSL',
        fileTypes: [{}],
        apiId: 'glsl',
        cdxEnabled: false
    },{
        displayText: 'GML',
        fileTypes: [{
            type: '.gml',
            common: true
        }],
        apiId: 'gml',
        cdxEnabled: false
    },{
        displayText: "Go",
        fileTypes: [{}],
        apiId: 'go',
        cdxEnabled: false
    },{
        displayText: 'Golo',
        fileTypes: [{}],
        apiId: 'golo',
        cdxEnabled: false
    },{
        displayText: 'Gradle',
        fileTypes: [{}],
        apiId: 'gradle',
        cdxEnabled: false
    },{
        displayText: 'Groovy',
        fileTypes: [{}],
        apiId: 'groovy',
        cdxEnabled: false
    },{
        displayText: 'HTML',
        fileTypes: [{
            type: '.html',
            common: true
        }],
        apiId: 'xml',
        cdxEnabled: false
    },{
        displayText: 'JavaScript',
        fileTypes: [{
            type: '.js',
            common: true
        },{
            type: '.json',
            common: false
        }],
        apiId: 'javascript',
        cdxEnabled: false
    },{
        displayText: 'Markdown',
        fileTypes: [{
            type: '.md',
            common: true
        }],
        apiId: 'markdown',
        cdxEnabled: false
    },{
        displayText: 'Python',
        fileTypes: [{
            type: '.py',
            common: true
        },{
            type: '.py2',
            common: false
        },{
            type: '.py3',
            common: true
        },{
            type: '.pyc',
            common: false
        }],
        apiId: 'python',
        cdxEnabled: false
    },{
        displayText: 'Ruby',
        fileTypes: [{
            type: '.ruby',
            common: true
        }],
        apiId: 'ruby',
        cdxEnabled: false
    },{
        displayText: 'XML',
        fileTypes: [{
            type: '.xml',
            common: true
        }],
        apiId: 'xml',
        cdxEnabled: false
    }];

preview.type_1c = `#ЗагрузитьИзФайла ext_module.txt // директива 7.7
#Если Клиент ИЛИ НаКлиенте Тогда // инструкции препроцессора
	&НаКлиентеНаСервереБезКонтекста // директивы компиляции
	Функция ТолстыйКлиентОбычноеПриложение(Знач Параметр1 = Неопределено, // комментарий
		Параметр2 = "", ПараметрN = 123.45, ПарамNN) Экспорт // еще комментарий
		Попытка
			Результат_Булевы_Значения = Новый Структура("П1, П2", Истина, Ложь, NULL, Неопределено);
			Перейти ~МеткаGOTO; // комментарий
			РезультатТаблицаДат = Новый ТаблицаЗначений;
			РезультатТаблицаДат.Колонки.Добавить("Колонка1", 
			Новый ОписаниеТипов("Дата", , ,
			Новый КвалификаторыДаты(ЧастиДаты.ДатаВремя));
			НС = РезультатТаблицаДат.Добавить(); НС["Колонка1"] = '20170101120000');
		Исключение
			ОписаниеОшибки = ОписаниеОшибки(); // встроенная функция
			Масс = Новый Массив; // встроенный тип
			Для Каждого Значение Из Масс Цикл
				Сообщить(Значение + Символы.ПС + "
				|продолжение строки"); // продолжение многострочной строки
				Продолжить; Прервать;
			КонецЦикла;
			СправочникСсылка   = Справочники.Языки.НайтиПоНаименованию("ru"); // встроенные типы
			СправочникОбъект   = СправочникСсылка.ПолучитьОбъект();
			ПеречислениеСсылка = Перечисления.ВидыМодификацииДанных.Изменен;
			ВызватьИсключение ОписаниеОшибки;
		КонецПопытки;
		~МеткаGOTO: // еще комментарий
		ВД = ВидДвиженияБухгалтерии.Дебет;
	КонецФункции // ТолстыйКлиентОбычноеПриложение()
#КонецЕсли`;

preview.type_abnf = `; line comment

ruleset     =   [optional] *(group1 / group2 / SP) CRLF ; trailing comment

group1      =   alt1
group1      =/  alt2

alt1        =   %x41-4D / %d78-90

alt2        =   %b00100001

group2      =   *1DIGIT / 2*HEXDIG / 3*4OCTET

optional    =   hex-codes
                / literal
                / sensitive
                / insensitive

hex-codes   =   %x68.65.6C.6C.6F
literal     =   "string literal"
sensitive   =   %s"case-sensitive string"
insensitive =   %i"case-insensitive string"`;


preview.type_accesslog = `20.164.151.111 - - [20/Aug/2015:22:20:18 -0400] "GET /mywebpage/index.php HTTP/1.1" 403 772 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.220 Safari/535.1"`;

preview.type_actionscript = `package org.example.dummy {
    import org.dummy.*;

    /*define package inline interface*/
    public interface IFooBarzable {
        public function foo(... pairs):Array;
    }

    public class FooBar implements IFooBarzable {
        static private var cnt:uint = 0;
        private var bar:String;

        //constructor
        public function TestBar(bar:String):void {
            bar = bar;
            ++cnt;
        }

        public function foo(... pairs):Array {
            pairs.push(bar);
            return pairs;
        }
    }
}`;

preview.type_ada = `package body Sqlite.Simple is

      Foo : int := int'Size;
      Bar : int := long'Size;

      Error_Message_C : chars_ptr := Sqlite_Errstr (Error);
      Error_Message : String := Null_Ignore_Value (Error_Message_C);
   begin

      Named : for Index in Foo..Bar loop
          Put ("Hi[]{}");
      end loop Named;

      Foo := Bar;
   end Message;

end Sqlite.Simple;`;

preview.type_angelscript = `interface IInterface
{
    void DoSomething();
}

namespace MyApplication
{
    /*
     * This ia a test class.
     */
    class SomeClass : IInterface
    {
        array<float> m_arr;

        array<SomeClass@> m_children;
        array<array<SomeClass@>> m_subChildren; // Nested templates

        int m_thing;

        SomeClass()
        {
            // Add some integers
            m_arr.insertLast(1.0f);
            m_arr.insertLast(1.75f);
            m_arr.insertLast(3.14159f);
            uint x = 0x7fff0000;
            int y = 9001;
        }

        int get_Thing() property { return m_thing; }
        void set_Thing(int x) property { m_thing = x; }

        void DoSomething()
        {
            print("Something! " + 'stuff.');
            for (uint i = 0; i < m_arr.length(); i++) {
                print("  " + i + ": " + m_arr[i]);
            }
        }

        protected void SomeProtectedFunction()
        {
            try {
                DoSomething();
            } catch {
                print("Exception while doing something!");
            }
        }
    }
}

void Main()
{
    SomeClass@ c = SomeClass();
    c.DoSomething();
}`;

preview.type_apache = `# rewrites rules for wordpress pretty url
LoadModule rewrite_module  modules/mod_rewrite.so
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . index.php [NC,L]

ExpiresActive On
ExpiresByType application/x-javascript  "access plus 1 days"

Order Deny,Allow
Allow from All

<Location /maps/>
  RewriteMap map txt:map.txt
  RewriteMap lower int:tolower
  RewriteCond %{REQUEST_URI} ^/([^/.]+)\\.html$ [NC]
  RewriteCond \${map:\${lower:%1}|NOT_FOUND} !NOT_FOUND
  RewriteRule .? /index.php?q=\${map:\${lower:%1}} [NC,L]
</Location>`;

preview.type_applescript = `repeat 5 times
    if foo is greater than bar then
        display dialog "Hello there"
    else
        beep
    end if
end repeat

(* comment (*nested comment*) *)
on do_something(s, y)
    return {s + pi, y mod 4}
end do_something

do shell script "/bin/echo 'hello'"`;

preview.type_arcade = `/* Highlight.js est for Arcade */
function testGeometry(element, point) {
    if (point.y != -1)
        return point;
    for (var i = 0 / 2; i < element.length; i++) {
        if (checkCondition($map.element[i]) === Infinity) {
            return DistanceGeodetic(element[i]);
        }
    }
    return element;
}
var filePath = "literal " + TextFormatting.BackSlash + TextFormatting.SingleQuote + ".ext"
var d = Dictionary("field1", 1, "field2",2);
return FeatureSet($map, ["POPULATION", "ELECTION-DATA"]);`;

preview.type_arduino = `/*
  Blink
  Turns on an LED on for one second, then off for one second, repeatedly.
 
  This example code is in the public domain.
 */
 
// Pin 13 has an LED connected on most Arduino boards.
// give it a name:
int led = 13;

// the setup routine runs once when you press reset:
void setup() {
  // initialize the digital pin as an output.
  pinMode(led, OUTPUT);     
}

// the loop routine runs over and over again forever:
void loop() {
  digitalWrite(led, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);               // wait for a second
  digitalWrite(led, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);               // wait for a second
}`;

preview.type_armasm = `.text

.global connect
connect:
    mov     r3, #2              ; s->sin_family = AF_INET
    strh    r3, [sp]
    ldr     r3, =server_port    ; s->sin_port = server_port
    ldr     r3, [r3]
    strh    r3, [sp, #2]
    ldr     r3, =server_addr    ; s->sin_addr = server_addr
    ldr     r3, [r3]
    str     r3, [sp, #4]
    mov     r3, #0              ; bzero(&s->sin_zero)
    str     r3, [sp, #8]
    str     r3, [sp, #12]
    mov     r1, sp      ; const struct sockaddr *addr = sp

    ldr     r7, =connect_call
    ldr     r7, [r7]
    swi     #0

    add     sp, sp, #16
    pop     {r0}        ; pop sockfd

    pop     {r7}
    pop     {fp, ip, lr}
    mov     sp, ip
    bx      lr

.data
socket_call:   .long 281
connect_call:  .long 283

/* all addresses are network byte-order (big-endian) */
server_addr:            .long 0x0100007f ; localhost
server_port:            .hword 0x0b1a`;

preview.type_asciidoc = `Hello, World!
============
Author Name, <author@domain.foo>

you can write text http://example.com[with links], optionally
using an explicit link:http://example.com[link prefix].

* single quotes around a phrase place 'emphasis'
** alternatively, you can put underlines around a phrase to add _emphasis_
* astericks around a phrase make the text *bold*
* pluses around a phrase make it +monospaced+
` + "* `smart' quotes using a leading backtick and trailing single quote" + `
` + "** use two of each for double ``smart'' quotes" + `

- escape characters are supported
- you can escape a quote inside emphasized text like 'here\\'s johnny!'

term:: definition
 another term:: another definition

// this is just a comment

Let's make a break.

'''

////
we'll be right with you

after this brief interruption.
////

== We're back!

Want to see a image::images/tiger.png[Tiger]?

.Nested highlighting
++++
<this_is inline="xml"></this_is>
++++

____
asciidoc is so powerful.
____

another quote:

[quote, Sir Arthur Conan Doyle, The Adventures of Sherlock Holmes]
____
When you have eliminated all which is impossible, then whatever remains, however improbable, must be the truth.
____

Getting Literal
---------------

 want to get literal? prefix a line with a space.

....
I'll join that party, too.
....

. one thing (yeah!)
` + ". two thing `i can write code`, and `more` wipee!" + `

NOTE: AsciiDoc is quite cool, you should try it.`;

preview.type_aspectj = `package com.aspectj.syntax;
import org.aspectj.lang.annotation.AdviceName;

privileged public aspect LoggingAspect percflowbelow(ajia.services.*){
  private pointcut getResult() : call(* *(..) throws SQLException) && args(Account, .., int);
  @AdviceName("CheckValidEmail")
  before (Customer hu) : getResult(hu){		
    System.out.println("Your mail address is valid!");
  }
  Object around() throws InsufficientBalanceException: getResult() && call(Customer.new(String,String,int,int,int)){
    return	proceed();
  }
  public Cache getCache() {
    return this.cache;
  }
  pointcut beanPropertyChange(BeanSupport bean, Object newValue): execution(void BeanSupport+.set*(*)) && args(newValue) && this(bean);
  declare parents: banking.entities.* implements BeanSupport;
  declare warning : call(void TestSoftening.perform()): "Please ensure you are not calling this from an AWT thread";
  private String Identifiable.id;
  public void Identifiable.setId(String id) {
    this.id = id;
  }
}`;

preview.type_autohotkey = `; hotkeys and hotstrings
#a::WinSet, AlwaysOnTop, Toggle, A
#Space::
  MsgBox, Percent sign (\`%) need to be escaped.
  Run "C:\\Program Files\\some\\program.exe"
  Gosub, label1
return
::btw::by the way
; volume
#Numpad8::Send {Volume_Up}
#Numpad5::Send {Volume_Mute}
#Numpad2::Send {Volume_Down}

label1:
  if (Clipboard = "")
  {
    MsgBox, , Clipboard, Empty!
  }
  else
  {
    StringReplace, temp, Clipboard, old, new, All
    MsgBox, , Clipboard, %temp%
  }
return`;

preview.type_autoit = `#NoTrayIcon
#AutoIt3Wrapper_Run_Tidy=Y
#include <Misc.au3>

_Singleton(@ScriptName) ; Allow only one instance
example(0, 10)

Func example($min, $max)
	For $i = $min To $max
		If Mod($i, 2) == 0 Then
			MsgBox(64, "Message", $i & ' is even number!')
		Else
			MsgBox(64, "Message", $i & ' is odd number!')
		EndIf
	Next
EndFunc   ;==>example`;

preview.type_avrasm = `;* Title:       Block Copy Routines
;* Version:     1.1

.include "8515def.inc"

        rjmp    RESET       ;reset handle

.def    flashsize=r16       ;size of block to be copied

flash2ram:
        lpm                 ;get constant
        st      Y+,r0       ;store in SRAM and increment Y-pointer
        adiw    ZL,1        ;increment Z-pointer
        dec     flashsize
        brne    flash2ram   ;if not end of table, loop more
        ret

.def    ramtemp =r1         ;temporary storage register
.def    ramsize =r16        ;size of block to be copied`;

preview.type_awk = `BEGIN {
  POPService  = "/inet/tcp/0/emailhost/pop3"
  RS = ORS = "\\r\\n"
  print "user name"            |& POPService
  POPService                    |& getline
  print "pass password"         |& POPService
  POPService                    |& getline
  print "retr 1"                |& POPService
  POPService                    |& getline
  if ($1 != "+OK") exit
  print "quit"                  |& POPService
  RS = "\\r\\n\\\\.\\r\\n"
  POPService |& getline
  print $0
  close(POPService)
}`;

preview.type_axapta = `class ExchRateLoadBatch extends RunBaseBatch {
  ExchRateLoad rbc;
  container currencies;
  boolean actual;
  boolean overwrite;
  date beg;
  date end;

  #define.CurrentVersion(5)

  #localmacro.CurrentList
    currencies,
    actual,
    beg,
    end
  #endmacro
}

public boolean unpack(container packedClass) {
  container       base;
  boolean         ret;
  Integer         version    = runbase::getVersion(packedClass);

  switch (version) {
    case #CurrentVersion:
      [version, #CurrentList] = packedClass;
      return true;
    default:
      return false;
  }
  return ret;
}`;

preview.type_basic = `10 CLS
20 FOR I = 0 TO 15
22 FOR J = 0 TO 7
30 COLOR I,J
40 PRINT " ** ";
45 NEXT J
46 COLOR I,0
47 GOSUB 100
48 PRINT
50 NEXT I
60 COLOR 15,0
99 END
100 FOR T = 65 TO 90
101 PRINT CHR$(T);
102 NEXT T
103 RETURN
200 REM Data types test
201 TOTAL# = 3.30#		'Double precision variable
202 BALANCE! = 3!		'Single precision variable
203 B2! = 12e5			'120000
204 ITEMS% = 10			'Integer variable
205 HEXTEST = &H12DB	'Hex value`;

preview.type_bash = `#!/bin/bash

###### CONFIG
ACCEPTED_HOSTS="/root/.hag_accepted.conf"
BE_VERBOSE=false

if [ "$UID" -ne 0 ]
then
 echo "Superuser rights required"
 exit 2
fi

genApacheConf(){
 echo -e "# Host \${HOME_DIR}$1/$2 :"
}

echo '"quoted"' | tr -d \\" > text.txt`;

preview.type_bnf = `<syntax>         ::= <rule> | <rule> <syntax>
<rule>           ::= <opt-whitespace> "<" <rule-name> ">" <opt-whitespace> "::=" <opt-whitespace> <expression> <line-end>
<opt-whitespace> ::= " " <opt-whitespace> | ""
<expression>     ::= <list> | <list> <opt-whitespace> "|" <opt-whitespace> <expression>
<line-end>       ::= <opt-whitespace> <EOL> | <line-end> <line-end>
<list>           ::= <term> | <term> <opt-whitespace> <list>
<term>           ::= <literal> | "<" <rule-name> ">"
<literal>        ::= '"' <text> '"' | "'" <text> "'"`;

preview.type_brainfuck = `++++++++++
[ 3*10 and 10*10
  ->+++>++++++++++<<
]>>
[ filling cells
  ->++>>++>++>+>++>>++>++>++>++>++>++>++>++>++>++>++[</]<[<]<[<]>>
]<
+++++++++<<
[ rough codes correction loop
  ->>>+>+>+>+++>+>+>+>+>+>+>+>+>+>+>+>+>+>+[<]<
]
more accurate сodes correction
>>>++>
-->+++++++>------>++++++>++>+++++++++>++++++++++>++++++++>--->++++++++++>------>++++++>
++>+++++++++++>++++++++++++>------>+++
rewind and output
[<]>[.>]`;

preview.type_c = `#include <stdio.h>
int main() {
    int n, i;
    unsigned long long fact = 1;
    printf("Enter an integer: ");
    scanf("%d", &n);

    // shows error if the user enters a negative integer
    if (n < 0)
        printf("Error! Factorial of a negative number doesn't exist.");
    else {
        for (i = 1; i <= n; ++i) {
            fact *= i;
        }
        printf("Factorial of %d = %llu", n, fact);
    }

    return 0;
}`;

preview.type_cal = `OBJECT Codeunit 11 Gen. Jnl.-Check Line
{
  OBJECT-PROPERTIES
  {
    Date=09-09-14;
    Time=12:00:00;
    Version List=NAVW18.00;
  }
  PROPERTIES
  {
    TableNo=81;
    Permissions=TableData 252=rimd;
    OnRun=BEGIN
            GLSetup.GET;
            RunCheck(Rec);
          END;

  }
  CODE
  {
    VAR
      Text000@1000 : TextConst 'ENU=can only be a closing date for G/L entries';
      Text001@1001 : TextConst 'ENU=is not within your range of allowed posting dates';

    PROCEDURE ErrorIfPositiveAmt@2(GenJnlLine@1000 : Record 81);
    BEGIN
      IF GenJnlLine.Amount > 0 THEN
        GenJnlLine.FIELDERROR(Amount,Text008);
    END;

    LOCAL PROCEDURE CheckGenJnlLineDocType@7(GenJnlLine@1001 : Record 81);
  }
}`;

preview.type_capnproto = `@0xdbb9ad1f14bf0b36;  # unique file ID, generated by \`capnp id\`

struct Person {
  name @0 :Text;
  birthdate @3 :Date;

  email @1 :Text;
  phones @2 :List(PhoneNumber);

  struct PhoneNumber {
    number @0 :Text;
    type @1 :Type;

    enum Type {
      mobile @0;
      home @1;
      work @2;
    }
  }
}

struct Date {
  year @0 :Int16;
  month @1 :UInt8;
  day @2 :UInt8;
  flags @3 :List(Bool) = [ true, false, false, true ];
}

interface Node {
  isDirectory @0 () -> (result :Bool);
}

interface Directory extends(Node) {
  list @0 () -> (list: List(Entry));
  struct Entry {
    name @0 :Text;
    node @1 :Node;
  }

  create @1 (name :Text) -> (file :File);
  mkdir @2 (name :Text) -> (directory :Directory)
  open @3 (name :Text) -> (node :Node);
  delete @4 (name :Text);
  link @5 (name :Text, node :Node);
}

interface File extends(Node) {
  size @0 () -> (size: UInt64);
  read @1 (startAt :UInt64 = 0, amount :UInt64 = 0xffffffffffffffff)
       -> (data: Data);
  # Default params = read entire file.

  write @2 (startAt :UInt64, data :Data);
  truncate @3 (size :UInt64);
}`;

preview.type_ceylon = `shared void run() {
    print("Hello, \`\` process.arguments.first else "World" \`\`!");
}
class Counter(count=0) {
    variable Integer count;
    shared Integer currentValue => count;
    shared void increment() => count++;
}`;

preview.type_clean = `module fsieve

import StdClass; // RWS
import StdInt, StdReal

NrOfPrimes :== 3000

primes :: [Int]
primes = pr where pr = [5 : sieve 7 4 pr]

sieve :: Int !Int [Int] -> [Int]
sieve g i prs
| isPrime prs g (toInt (sqrt (toReal g))) = [g : sieve\` g i prs]
| otherwise                               = sieve (g + i) (6 - i) prs

sieve\` :: Int Int [Int] -> [Int]
sieve\` g i prs = sieve (g + i) (6 - i) prs

isPrime :: [Int] !Int Int -> Bool
isPrime [f:r] pr bd
| f>bd        =  True
| pr rem f==0 =  False
| otherwise   =  isPrime r pr bd

select :: [x] Int -> x
select [f:r] 1 = f
select [f:r] n = select r (n - 1)

Start :: Int
Start = select [2, 3 : primes] NrOfPrimes`;

preview.type_clojure = `(def ^:dynamic chunk-size 17)

(defn next-chunk [rdr]
  (let [buf (char-array chunk-size)
        s (.read rdr buf)]
  (when (pos? s)
    (java.nio.CharBuffer/wrap buf 0 s))))

(defn chunk-seq [rdr]
  (when-let [chunk (next-chunk rdr)]
    (cons chunk (lazy-seq (chunk-seq rdr)))))`; 

preview.type_clojure_repl = `user=> (defn f [x y]
  #_=>   (+ x y))
#'user/f
user=> (f 5 7)
12
user=> nil
nil`;

preview.type_cmake = `cmake_minimum_required(VERSION 2.8.8)
project(cmake_example)

# Show message on Linux platform
if (\${CMAKE_SYSTEM_NAME} MATCHES Linux)
    message("Good choice, bro!")
endif()

# Tell CMake to run moc when necessary:
set(CMAKE_AUTOMOC ON)
# As moc files are generated in the binary dir,
# tell CMake to always look for includes there:
set(CMAKE_INCLUDE_CURRENT_DIR ON)

# Widgets finds its own dependencies.
find_package(Qt5Widgets REQUIRED)

add_executable(myproject main.cpp mainwindow.cpp)
qt5_use_modules(myproject Widgets)`;

preview.type_coffeescript = `grade = (student, period=(if b? then 7 else 6)) ->
  if student.excellentWork
    "A+"
  else if student.okayStuff
    if student.triedHard then "B" else "B-"
  else
    "C"

class Animal extends Being
  constructor: (@name) ->

  move: (meters) ->
    alert @name + " moved #{meters}m."`;

preview.type_cos = `#dim test as %Library.Integer
SET test = 123.099
set ^global = %request.Content
Write "Current date """, $ztimestamp, """, result: ", test + ^global = 125.099
do ##class(Cinema.Utils).AddShow("test") // class method call
do ##super() ; another one-line comment
d:(^global = 2) ..thisClassMethod(1, 2, "test")
/*
 * Sub-languages support:
 */
&sql( SELECT * FROM Cinema.Film WHERE Length > 2 )
&js<for (var i = 0; i < String("test").split("").length); ++i) {
    console.log(i);
}>
&html<<!DOCTYPE html>
<html>
<head> <meta name="test"/> </head>
<body>Test</body>
</html>>

quit $$$OK`;


preview.type_coq = `Inductive seq : nat -> Set :=
| niln : seq 0
| consn : forall n : nat, nat -> seq n -> seq (S n).

Fixpoint length (n : nat) (s : seq n) {struct s} : nat :=
  match s with
  | niln => 0
  | consn i _ s' => S (length i s')
  end.

Theorem length_corr : forall (n : nat) (s : seq n), length n s = n.
Proof.
  intros n s.

  (* reasoning by induction over s. Then, we have two new goals
     corresponding on the case analysis about s (either it is
     niln or some consn *)
  induction s.

    (* We are in the case where s is void. We can reduce the
       term: length 0 niln *)
    simpl.

    (* We obtain the goal 0 = 0. *)
    trivial.

    (* now, we treat the case s = consn n e s with induction
       hypothesis IHs *)
    simpl.

    (* The induction hypothesis has type length n s = n.
       So we can use it to perform some rewriting in the goal: *)
    rewrite IHs.

    (* Now the goal is the trivial equality: S n = S n *)
    trivial.

  (* Now all sub cases are closed, we perform the ultimate
     step: typing the term built using tactics and save it as
     a witness of the theorem. *)
Qed.`;

preview.type_cpp = `#include <iostream>

int main(int argc, char *argv[]) {

  /* An annoying "Hello World" example */
  for (auto i = 0; i < 0xFFFF; i++)
    cout << "Hello, World!" << endl;

  char c = '\\n';
  unordered_map <string, vector<string> > m;
  m["key"] = "\\\\\\\\"; // this is an error

  return -2e3 + 12l;
}`;

preview.type_crmsh = `node webui
node 168633611: node1
rsc_template web-server apache \
	params port=8000 \
	op monitor interval=10s
# Never use this STONITH agent in production!
primitive development-stonith stonith:null \
	params hostlist="webui node1 node2 node3"
primitive proxy systemd:haproxy \
	op monitor interval=10s
primitive proxy-vip IPaddr2 \
	params ip=10.13.37.20
primitive srv1 @web-server
primitive srv2 @web-server
primitive test1 Dummy
primitive test2 IPaddr2 \
	params ip=10.13.37.99
primitive vip1 IPaddr2 \
	params ip=10.13.37.21 \
	op monitor interval=20s
primitive vip2 IPaddr2 \
	params ip=10.13.37.22 \
	op monitor interval=20s
group g-proxy proxy-vip proxy
group g-serv1 vip1 srv1
group g-serv2 vip2 srv2
# Never put the two web servers on the same node
colocation co-serv -inf: g-serv1 g-serv2
# Never put any web server or haproxy on webui
location l-avoid-webui { g-proxy g-serv1 g-serv2 } -inf: webui
# Prever to spread groups across nodes
location l-proxy g-proxy 200: node1
location l-serv1 g-serv1 200: node2
location l-serv2 g-serv2 200: node3
property cib-bootstrap-options: \
	stonith-enabled=true \
	no-quorum-policy=ignore \
	placement-strategy=balanced \
	have-watchdog=false \
	dc-version="1.1.13-1.1.13+git20150827.e8888b9" \
	cluster-infrastructure=corosync \
	cluster-name=hacluster
rsc_defaults rsc-options: \
	resource-stickiness=1 \
	migration-threshold=3
op_defaults op-options: \
	timeout=600 \
	record-pending=true`;

preview.type_crystal = `class Person
  def initialize(@name : String)
  end

  def greet
    puts "Hi, I'm #{@name}"
  end
end

class Employee < Person
end

employee = Employee.new "John"
employee.greet         # => "Hi, I'm John"
employee.is_a?(Person) # => true

@[Link("m")]
lib C
  # In C: double cos(double x)
  fun cos(value : Float64) : Float64
end

C.cos(1.5_f64) # => 0.0707372

s = uninitialized String
s = <<-'STR'
\\hello\\world
\\hello\\world
STR`;

preview.type_csharp = `using System.IO.Compression;

#pragma warning disable 414, 3021

namespace MyApplication
{
    [Obsolete("...")]
    class Program : IInterface
    {
        public static List<int> JustDoIt(int count)
        {
            Console.WriteLine($"Hello {Name}!");
            return new List<int>(new int[] { 1, 2, 3 })
        }
    }
}`;

preview.type_csp = `Content-Security-Policy:
    default-src 'self';
    style-src 'self' css.example.com;
    img-src *.example.com;
    script-src 'unsafe-eval' 'self' js.example.com 'nonce-Nc3n83cnSAd3wc3Sasdfn939hc3'`;

preview.type_css = `@font-face {
  font-family: Chunkfive; src: url('Chunkfive.otf');
}

body, .usertext {
  color: #F0F0F0; background: #600;
  font-family: Chunkfive, sans;
  --heading-1: 30px/32px Helvetica, sans-serif;
}

@import url(print.css);
@media print {
  a[href^=http]::after {
    content: attr(href)
  }
}`;

preview.type_d = `#!/usr/bin/rdmd
// Computes average line length for standard input.
import std.stdio;

/+
  this is a /+ nesting +/ comment
+/

enum COMPILED_ON = __TIMESTAMP__;  // special token

enum character = '©';
enum copy_valid = '&copy;';
enum backslash_escaped = '\\\\';

// string literals
enum str = \`hello "world"!\`;
enum multiline = r"lorem
ipsum
dolor";  // wysiwyg string, no escapes here allowed
enum multiline2 = "sit
amet
\\"adipiscing\\"
elit.";
enum hex = x"66 6f 6f";   // same as "foo"

#line 5

// float literals
enum f = [3.14f, .1, 1., 1e100, 0xc0de.01p+100];

static if (something == true) {
   import std.algorithm;
}

void main() pure nothrow @safe {
    ulong lines = 0;
    double sumLength = 0;
    foreach (line; stdin.byLine()) {
        ++lines;
        sumLength += line.length;
    }
    writeln("Average line length: ",
        lines ? sumLength / lines : 0);
}`;

preview.type_dart = `library app;
import 'dart:html';

part 'app2.dart';

/**
 * Class description and [link](http://dartlang.org/).
 */
@Awesome('it works!')
class SomeClass<S extends Iterable> extends BaseClass<S> implements Comparable {
  factory SomeClass(num param);
  SomeClass._internal(int q) : super() {
    assert(q != 1);
    double z = 0.0;
  }

  /// **Sum** function
  int sum(int a, int b) => a + b;

  ElementList els() => querySelectorAll('.dart');
}

String str = ' (${'parameter' + 'zxc'})';
String str = " (${true ? 2 + 2 / 2 : null})";
String str = " ($variable)";
String str = r'\\nraw\\';
String str = r"\\nraw\\";
var str = '''
Something \${2+3}
''';
var str = r"""
Something \${2+3}
""";

checkVersion() async {
  var version = await lookUpVersion();
}`;

preview.type_delphi = `TList = Class(TObject)
Private
  Some: String;
Public
  Procedure Inside; // Suxx
End;{TList}

Procedure CopyFile(InFileName, var OutFileName: String);
Const
  BufSize = 4096; (* Huh? *)
Var
  InFile, OutFile: TStream;
  Buffer: Array[1..BufSize] Of Byte;
  ReadBufSize: Integer;
Begin
  InFile := Nil;
  OutFile := Nil;
  Try
    InFile := TFileStream.Create(InFileName, fmOpenRead);
    OutFile := TFileStream.Create(OutFileName, fmCreate);
    Repeat
      ReadBufSize := InFile.Read(Buffer, BufSize);
      OutFile.Write(Buffer, ReadBufSize);
    Until ReadBufSize<>BufSize;
    Log('File ''' + InFileName + ''' copied'#13#10);
  Finally
    InFile.Free;
    OutFile.Free;
  End;{Try}
End;{CopyFile}`;

preview.type_diff = `Index: languages/ini.js
===================================================================
--- languages/ini.js    (revision 199)
+++ languages/ini.js    (revision 200)
@@ -1,8 +1,7 @@
 hljs.LANGUAGES.ini =
 {
   case_insensitive: true,
-  defaultMode:
-  {
+  defaultMode: {
     contains: ['comment', 'title', 'setting'],
     illegal: '[^\\\\s]'
   },

*** /path/to/original timestamp
--- /path/to/new      timestamp
***************
*** 1,3 ****
--- 1,9 ----
+ This is an important
+ notice! It should
+ therefore be located at
+ the beginning of this
+ document!

! compress the size of the
! changes.

  It is important to spell`;

preview.type_django = `{% if articles|length %}
{% for article in articles %}

{% custom %}

{# Striped table #}
<tr class="{% cycle odd,even %}">
  <td>{{ article|default:"Hi... " }}</td>
  <td {% if article.today %}class="today"{% endif %}>
    Published on {{ article.date }}
  </td>
</tr>

{% endfor %}
{% endif %}`;

preview.type_dns = `$ORIGIN example.com.    ; designates the start of this zone file in the namespace
$TTL 1h                 ; default expiration time of all resource records without their own TTL value
example.com.  IN  SOA   ns.example.com. username.example.com. ( 2007120710 1d 2h 4w 1h )
example.com.  IN  NS    ns                    ; ns.example.com is a nameserver for example.com
example.com.  IN  NS    ns.somewhere.example. ; ns.somewhere.example is a backup nameserver for example.com
example.com.  IN  MX    10 mail.example.com.  ; mail.example.com is the mailserver for example.com
@             IN  MX    20 mail2.example.com. ; equivalent to above line, "@" represents zone origin
@             IN  MX    50 mail3              ; equivalent to above line, but using a relative host name
example.com.  IN  A     192.0.2.1             ; IPv4 address for example.com
              IN  AAAA  2001:db8:10::1        ; IPv6 address for example.com
ns            IN  A     192.0.2.2             ; IPv4 address for ns.example.com
              IN  AAAA  2001:db8:10::2        ; IPv6 address for ns.example.com
www           IN  CNAME example.com.          ; www.example.com is an alias for example.com
wwwtest       IN  CNAME www                   ; wwwtest.example.com is another alias for www.example.com
mail          IN  A     192.0.2.3             ; IPv4 address for mail.example.com
mail2         IN  A     192.0.2.4             ; IPv4 address for mail2.example.com
mail3         IN  A     192.0.2.5             ; IPv4 address for mail3.example.com`;

preview.type_dockerfile = `# Example instructions from https://docs.docker.com/reference/builder/
FROM ubuntu:14.04

MAINTAINER example@example.com

ENV foo /bar
WORKDIR \${foo}   # WORKDIR /bar
ADD . $foo       # ADD . /bar
COPY \\$foo /quux # COPY $foo /quux
ARG   VAR=FOO

RUN apt-get update && apt-get install -y software-properties-common\
    zsh curl wget git htop\
    unzip vim telnet
RUN ["/bin/bash", "-c", "echo hello \${USER}"]

CMD ["executable","param1","param2"]
CMD command param1 param2

EXPOSE 1337

ENV myName="John Doe" myDog=Rex\\ The\\ Dog \
    myCat=fluffy

ENV myName John Doe
ENV myDog Rex The Dog
ENV myCat fluffy

ADD hom* /mydir/        # adds all files starting with "hom"
ADD hom?.txt /mydir/    # ? is replaced with any single character

COPY hom* /mydir/        # adds all files starting with "hom"
COPY hom?.txt /mydir/    # ? is replaced with any single character
COPY --from=foo / .

ENTRYPOINT ["executable", "param1", "param2"]
ENTRYPOINT command param1 param2

VOLUME ["/data"]

USER daemon

LABEL com.example.label-with-value="foo"
LABEL version="1.0"
LABEL description="This text illustrates \\
that label-values can span multiple lines."

WORKDIR /path/to/workdir

ONBUILD ADD . /app/src

STOPSIGNAL SIGKILL

HEALTHCHECK --retries=3 cat /health

SHELL ["/bin/bash", "-c"]`;

preview.type_dos = `cd \
copy a b
ping 192.168.0.1
@rem ping 192.168.0.1
net stop sharedaccess
del %tmp% /f /s /q
del %temp% /f /s /q
ipconfig /flushdns
taskkill /F /IM JAVA.EXE /T

cd Photoshop/Adobe Photoshop CS3/AMT/
if exist application.sif (
    ren application.sif _application.sif
) else (
    ren _application.sif application.sif
)

taskkill /F /IM proquota.exe /T

sfc /SCANNOW

set path = test

xcopy %1\\*.* %2`;

preview.type_dsconfig = `# Create client connection policies
dsconfig create-client-connection-policy \\
  --policy-name "Restrictive Client Connection Policy" \\
  --set "description:Restrictive Client Connection Policy" \\
  --set enabled:true --set evaluation-order-index:1000 \\
  --set "connection-criteria:User.0 Connection Criteria" \\
  --set maximum-concurrent-connections:2 \\
  --set "maximum-connection-duration:1 s" \\
  --set "maximum-idle-connection-duration:1 s" \\
  --set maximum-operation-count-per-connection:1000
create-client-connection-policy \\
  --policy-name "Another Client Connection Policy" \\
  --set enabled:true --set evaluation-order-index:100 \\
  --set 'connection-criteria:User.1 Connection Criteria' \\
  --reset maximum-concurrent-connections
# Configure global ACIs
dsconfig set-access-control-handler-prop \\
 --add global-aci:'(target="ldap:///cn=config")(targetattr="*")(version 3.0; acl "Allow access to the config tree by cn=admin,c=us"; allow(all) groupdn="ldap:///cn=directory administrators,ou=groups,c=us";)' \\
 --add global-aci:'(target="ldap:///cn=monitor")(targetattr="*")(version 3.0; acl "Allow access to the monitor tree by cn=admin,c=us"; allow(all) groupdn="ldap:///cn=directory administrators,ou=groups,c=us";)' \\
 --remove global-aci:'(target="ldap:///cn=alerts")(targetattr="*")(version 3.0; acl "Allow access to the alerts tree by cn=admin,c=us"; allow(all) groupdn="ldap:///cn=directory administrators,ou=groups,c=us";)'
# Delete error logger
dsconfig delete-log-publisher --publisher-name "File-Based Error Logger"`;

preview.type_dts = `/*
 *  Copyright (C) 2011 - 2014 Xilinx
 *
 * This software is licensed under the terms of the GNU General Public
 * License version 2, as published by the Free Software Foundation, and
 * may be copied, distributed, and modified under those terms.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 */
/include/ "skeleton.dtsi"

/ {
	compatible = "xlnx,zynq-7000";

	pmu {
		compatible = "arm,cortex-a9-pmu";
		interrupts = <0 5 4>, <0 6 4>;
		interrupt-parent = <&intc>;
		reg = < 0xf8891000 0x1000 0xf8893000 0x1000 >;
	};

	regulator_vccpint: fixedregulator@0 {
		compatible = "regulator-fixed";
		regulator-name = "VCCPINT";
		regulator-min-microvolt = <1000000>;
		regulator-max-microvolt = <1000000>;
		regulator-boot-on;
		regulator-always-on;
	};

	amba: amba {
		compatible = "simple-bus";
		#address-cells = <1>;
		#size-cells = <1>;
		interrupt-parent = <&intc>;
		ranges;

		adc: adc@f8007100 {
			compatible = "xlnx,zynq-xadc-1.00.a";
			reg = <0xf8007100 0x20>;
			interrupts = <0 7 4>;
			interrupt-parent = <&intc>;
			clocks = <&clkc 12>;
		};

		i2c0: i2c@e0004000 {
			compatible = "cdns,i2c-r1p10";
			status = "disabled";
			clocks = <&clkc 38>;
			interrupt-parent = <&intc>;
			interrupts = <0 25 4>;
			reg = <0xe0004000 0x1000>;
			#address-cells = <1>;
			#size-cells = <0>;
		};

		L2: cache-controller@f8f02000 {
			compatible = "arm,pl310-cache";
			reg = <0xF8F02000 0x1000>;
			interrupts = <0 2 4>;
			arm,data-latency = <3 2 2>;
			arm,tag-latency = <2 2 2>;
			cache-unified;
			cache-level = <2>;
		};

	};
};`;

preview.type_dust = `<h3>Hours</h3>

<ul>
  {#users}
  <li {hello}>{firstName}</li>{~n}
  {/users}
</ul>`;

preview.type_ebnf = `(* line comment *)

rule        =   [optional] , symbol , { letters } , ( digit | symbol ) ;

optional    =   ? something unnecessary ? ; (* trailing comment *)

symbol      =   '!' | '@' | '#' | '$' | '%' | '&' | '*' ;
digit       =   "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" ;
letter      =   "A" | "B" | "C" | "D" | "E" | "F" | "G"
              | "H" | "I" | "J" | "K" | "L" | "M" | "N"
              | "O" | "P" | "Q" | "R" | "S" | "T" | "U"
              | "V" | "W" | "X" | "Y" | "Z" ;`;

preview.type_elixir = `defrecord Person, first_name: nil, last_name: "Dudington" do
  def name record do # huh ?
    "#{record.first_name} #{record.last_name}"
  end
end

defrecord User, name: "José", age: 25

guy = Person.new first_name: "Guy"
guy.name

defmodule ListServer do
  @moduledoc """
  This module provides an easy to use ListServer, useful for keeping
  lists of things.
  """
  use GenServer.Behaviour
  alias Foo.Bar

  ### Public API
  @doc """
  Starts and links a new ListServer, returning {:ok, pid}

  ## Example

    iex> {:ok, pid} = ListServer.start_link

  """
  def start_link do
    :gen_server.start_link({:local, :list}, __MODULE__, [], [])
  end

  ### GenServer API
  def init(list) do
    {:ok, list}
  end

  # Clear the list
  def handle_cast :clear, list do
    {:noreply, []}
  end
end

{:ok, pid} = ListServer.start_link
pid <- {:foo, "bar"}

greeter = fn(x) -> IO.puts "hey #{x}" end
greeter.("Bob")`;

preview.type_elm = `import Browser
import Html exposing (div, button, text)
import Html.Events exposing (onClick)

type Msg
    = Increment

main =
    Browser.sandbox
        { init = 0
        , update = \\msg model -> model + 1
        , view = view
        }

view model =
    div []
        [ div [] [ text (String.fromInt model) ]
        , button [ onClick Increment ] [ text "+" ]
        ]

chars =
    String.cons 'C' <| String.cons 'h' <| "ars"`;

preview.type_erb = `<%# this is a comment %>

<% @posts.each do |post| %>
  <p><%= link_to post.title, post %></p>
<% end %>

<%- available_things = things.select(&:available?) -%>
<%%- x = 1 + 2 -%%>
<%% value = 'real string #{@value}' %%>
<%%= available_things.inspect %%>`;

preview.erlang_repl = `1> Str = "abcd".
"abcd"
2> L = test:length(Str).
4
3> Descriptor = {L, list_to_atom(Str)}.
{4,abcd}
4> L.
4
5> b().
Descriptor = {4,abcd}
L = 4
Str = "abcd"
ok
6> f(L).
ok
7> b().
Descriptor = {4,abcd}
Str = "abcd"
ok
8> {L, _} = Descriptor.
{4,abcd}
9> L.
4
10> 2#101.
5
11> 1.85e+3.
1850`;

preview.type_erlang = `-module(ssh_cli).

-behaviour(ssh_channel).

-include("ssh.hrl").
%% backwards compatibility
-export([listen/1, listen/2, listen/3, listen/4, stop/1]).

if L =/= [] ->      % If L is not empty
    sum(L) / count(L);
true ->
    error
end.

%% state
-record(state, {
    cm,
    channel
   }).

-spec foo(integer()) -> integer().
foo(X) -> 1 + X.

test(Foo)->Foo.

init([Shell, Exec]) ->
    {ok, #state{shell = Shell, exec = Exec}};
init([Shell]) ->
    false = not true,
    io:format("Hello, \\"~p!~n", [atom_to_list('World')]),
    {ok, #state{shell = Shell}}.

concat([Single]) -> Single;
concat(RList) ->
    EpsilonFree = lists:filter(
        fun (Element) ->
            case Element of
                epsilon -> false;
                _ -> true
            end
        end,
        RList),
    case EpsilonFree of
        [Single] -> Single;
        Other -> {concat, Other}
    end.

union_dot_union({union, _}=U1, {union, _}=U2) ->
    union(lists:flatten(
        lists:map(
            fun (X1) ->
                lists:map(
                    fun (X2) ->
                        concat([X1, X2])
                    end,
                    union_to_list(U2)
                )
            end,
            union_to_list(U1)
        ))).`;

preview.type_excel = `=IF(C10 <= 275.5, "Unprofitable", "Profitable")`;

preview.type_fix = `8=FIX.4.2␁9=0␁35=8␁49=SENDERTEST␁56=TARGETTEST␁34=00000001526␁52=20120429-13:30:08.137␁1=ABC12345␁11=2012abc1234␁14=100␁17=201254321␁20=0␁30=NYSE␁31=108.20␁32=100␁38=100␁39=2␁40=1␁47=A␁54=5␁55=BRK␁59=2␁60=20120429-13:30:08.000␁65=B␁76=BROKER␁84=0␁100=NYSE␁111=100␁150=2␁151=0␁167=CS␁377=N␁10000=SampleCustomTag␁10=123␁

8=FIX.4.29=035=849=SENDERTEST56=TARGETTEST34=0000000152652=20120429-13:30:08.1371=ABC1234511=2012abc123414=10017=20125432120=030=NYSE31=108.2032=10038=10039=240=147=A54=555=BRK59=260=20120429-13:30:08.00065=B76=BROKER84=0100=NYSE111=100150=2151=0167=CS377=N10000=SampleCustomTag10=123
`;

preview.type_flix = `/**
 * An example of Flix for syntax highlighting.
 */

// Here is a namespace.
namespace a.b.c {

    // Here are some literals.
    def b: Bool = true
    def c: Char = 'a'
    def f: Float = 1.23
    def i: Int = 42
    def s: Str = "string"

    // Here are some relations.
    rel LitStm(r: Str, c: Int)
    rel AddStm(r: Str, x: Str, y: Str)
    rel DivStm(r: Str, x: Str, y: Str)

    // Here is a lattice.
    lat LocalVar(k: Str, v: Constant)

    // Here is an index.
    index LitStm{{r}, {r, c}}

    // Here is an enum.
    enum Constant {
          case Top,

        case Cst(Int),

          case Bot
    }

    // Here is a function.
    def leq(e1: Constant, e2: Constant): Bool = match (e1, e2) with {
        case (Constant.Bot, _)                      => true
        case (Constant.Cst(n1), Constant.Cst(n2))   => n1 == n2
        case (_, Constant.Top)                      => true
        case _                                      => false
    }

    // Here are some rules.
    LocalVar(r, alpha(c)) :- LitStm(r, c).

    LocalVar(r, sum(v1, v2)) :- AddStm(r, x, y),
                                LocalVar(x, v1),
                                LocalVar(y, v2).
}`;

preview.type_fortran = `subroutine test_sub(k)
    implicit none

  !===============================
  !   This is a test subroutine
  !===============================

    integer, intent(in)           :: k
    double precision, allocatable :: a(:)
    integer, parameter            :: nmax=10
    integer                       :: i

    allocate (a(nmax))

    do i=1,nmax
      a(i) = dble(i)*5.d0
    enddo

    print *, 'Hello world'
    write (*,*) a(:)

end subroutine test_sub`;

preview.type_fsharp = `open System

// Single line comment...
(*
  This is a
  multiline comment.
*)
let checkList alist =
    match alist with
    | [] -> 0
    | [a] -> 1
    | [a; b] -> 2
    | [a; b; c] -> 3
    | _ -> failwith "List is too big!"


let text = "Some text..."
let text2 = @"A ""verbatim"" string..."
let catalog = """
Some "long" string...
"""

let rec fib x = if x <= 2 then 1 else fib(x-1) + fib(x-2)

let fibs =
    Async.Parallel [ for i in 0..40 -> async { return fib(i) } ]
    |> Async.RunSynchronously

type Sprocket(gears) =
  member this.Gears : int = gears

[<AbstractClass>]
type Animal =
  abstract Speak : unit -> unit

type Widget =
  | RedWidget
  | GreenWidget

type Point = {X: float; Y: float;}

[<Measure>]
type s
let minutte = 60<s>

type DefaultMailbox<'a>() =
    let mutable inbox = ConcurrentQueue<'a>()
    let awaitMsg = new AutoResetEvent(false)`;

preview.type_gams = `SETS
    I   canning plants   / SEATTLE, SAN-DIEGO /
    J   markets          / NEW-YORK, CHICAGO, TOPEKA / ;
PARAMETERS
    A(I)  capacity of plant i in cases
      /    SEATTLE     350
           SAN-DIEGO   600  /
    B(J)  demand at market j in cases
      /    NEW-YORK    325
           CHICAGO     300
           TOPEKA      275  / ;
TABLE D(I,J)  distance in thousands of miles
                  NEW-YORK       CHICAGO      TOPEKA
    SEATTLE          2.5           1.7          1.8
    SAN-DIEGO        2.5           1.8          1.4  ;
SCALAR F  freight in dollars per case per thousand miles  /90/ ;
PARAMETER C(I,J)  transport cost in thousands of dollars per case ;
          C(I,J) = F * D(I,J) / 1000 ;
VARIABLES
    X(I,J)  shipment quantities in cases
    Z       total transportation costs in thousands of dollars ;
POSITIVE VARIABLE X ;
EQUATIONS
    COST        define objective function
    SUPPLY(I)   observe supply limit at plant i
    DEMAND(J)   satisfy demand at market j ;
COST ..        Z  =E=  SUM((I,J), C(I,J)*X(I,J)) ;
SUPPLY(I) ..   SUM(J, X(I,J))  =L=  A(I) ;
DEMAND(J) ..   SUM(I, X(I,J))  =G=  B(J) ;
MODEL TRANSPORT /ALL/ ;
SOLVE TRANSPORT USING LP MINIMIZING Z ;`;

preview.type_gauss = `// This is a test
#include pv.sdf

proc (1) = calc(local__row, fin);
    if local__row;
        nr = local__row;
    else;
        k = colsf(fin);
        nr = floor(minc(maxbytes/(k*8*3.5)|maxvec/(k+1)));
    endif;
    retp(nr);
endp;

s = "{% test string %}";

fn twopi=pi*2;

/* Takes in multiple numbers.
   Output sum */
keyword add(str);
   local tok,sum;
   sum = 0;
   do until str $== "";
      { tok, str } = token(str);
      sum = sum + stof(tok);
   endo;
   print "Sum is: " sum;
endp;`;

preview.type_gcode = `O003 (DIAMOND SQUARE)
N2 G54 G90 G49 G80
N3 M6 T1 (1.ENDMILL)
N4 M3 S1800
N5 G0 X-.6 Y2.050
N6 G43  H1  Z.1
N7 G1 Z-.3 F50.
N8 G41 D1 Y1.45
N9 G1 X0 F20.
N10 G2 J-1.45
(CUTTER COMP CANCEL)
N11 G1 Z-.2 F50.
N12 Y-.990
N13 G40
N14 G0 X-.6 Y1.590
N15 G0 Z.1
N16 M5 G49 G28 G91 Z0
N17 CALL O9456
N18 #500=0.004
N19 #503=[#500+#501]
N20 VC45=0.0006
VS4=0.0007
N21 G90 G10 L20 P3 X5.Y4. Z6.567
N22 G0 X5000
N23 IF [#1 LT 0.370] GOTO 49
N24 X-0.678 Y+.990
N25 G84.3 X-0.1
N26 #4=#5*COS[45]
N27 #4=#5*SIN[45]
N28 VZOFZ=652.9658
%`;

preview.type_gherkin = `# language: en
Feature: Addition
  In order to avoid silly mistakes
  As a math idiot
  I want to be told the sum of two numbers

  @this_is_a_tag
  Scenario Outline: Add two numbers
    * I have a calculator
    Given I have entered <input_1> into the calculator
    And I have entered <input_2> into the calculator
    When I press <button>
    Then the result should be <output> on the screen
    And I have a string like
    """
    Here is
    some
    multiline text
    """

  Examples:
    | input_1 | input_2 | button | output |
    | 20      | 30      | add    | 50     |
    | 2       | 5       | add    | 7      |
    | 0       | 40      | add    | 40     |`;

preview.type_glsl = `// vertex shader
#version 150
in  vec2 in_Position;
in  vec3 in_Color;

out vec3 ex_Color;
void main(void) {
    gl_Position = vec4(in_Position.x, in_Position.y, 0.0, 1.0);
    ex_Color = in_Color;
}


// geometry shader
#version 150

layout(triangles) in;
layout(triangle_strip, max_vertices = 3) out;

void main() {
  for(int i = 0; i < gl_in.length(); i++) {
    gl_Position = gl_in[i].gl_Position;
    EmitVertex();
  }
  EndPrimitive();
}


// fragment shader
#version 150
precision highp float;

in  vec3 ex_Color;
out vec4 gl_FragColor;

void main(void) {
    gl_FragColor = vec4(ex_Color, 1.0);
}`;

preview.type_gml = `/// @description Collision code
// standard collision handling

// Horizontal collisions
if(place_meeting(x+hspd, y, obj_wall)) {
	while(!place_meeting(x+sign(hspd), y, obj_wall)) {
		x += sign(hspd);
	}
	hspd = 0;
}
x += hspd;

// Vertical collisions
if(place_meeting(x, y+vspd, collide_obj)) {
	while(!place_meeting(x, y+sign(vspd), collide_obj)) {
		y += sign(vspd);
	}
	vspd = 0;
}
y += vspd;

show_debug_message("This is a test");`;

preview.type_go = `package main

import "fmt"

func main() {
    ch := make(chan float64)
    ch <- 1.0e10    // magic number
    x, ok := <- ch
    defer fmt.Println(\`exitting now\\\`)
    go println(len("hello world!"))
    return
}`;

preview.type_golo = `module hello

function dyno = -> DynamicObject()

struct human = { name }

@annotated
function main = |args| {
    let a = 1
    var b = 2
    
    println("hello") 

    let john = human("John Doe")
}`;

preview.type_gradle = `apply plugin: 'android'

android {
    compileSdkVersion 19
    buildToolsVersion "19.1"

    defaultConfig {
        minSdkVersion 15
        targetSdkVersion 19
        versionCode 5
        versionName "0.4.4"
    }

    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_7
        targetCompatibility JavaVersion.VERSION_1_7
    }
    signingConfigs {
        release
    }
    buildTypes {
        release {
            // runProguard true
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.txt'
            signingConfig signingConfigs.release
        }
    }
}

dependencies {
    compile fileTree(dir: 'libs', include: ['*.jar'])

    compile 'com.example:example-lib:1.0.0'
}


def propFile = file('../signing.properties')
if( propFile.canRead() ) {
    def Properties p = new Properties()
    p.load(new FileInputStream(propFile))

    if( p!=null
    &&  p.containsKey("STORE_FILE")
    &&  p.containsKey('STORE_PASSWORD')
    &&  p.containsKey('KEY_ALIAS')
    &&  p.containsKey('KEY_PASSWORD')
    ) {
        println "RELEASE_BUILD: Signing..."

        android.signingConfigs.release.storeFile = file( p['STORE_FILE'] )
        android.signingConfigs.release.storePassword = p['STORE_PASSWORD']
        android.signingConfigs.release.keyAlias = p['KEY_ALIAS']
        android.signingConfigs.release.keyPassword = p['KEY_PASSWORD']
    } else {
        println "RELEASE_BUILD: Required properties in signing.properties are missing"
        android.buildTypes.release.signingConfig = null
    }
} else {
    println "RELEASE_BUILD: signing.properties not found"
    android.buildTypes.release.signingProperties = null
}`;

preview.type_groovy = `#!/usr/bin/env groovy
package model

import groovy.transform.CompileStatic
import java.util.List as MyList

trait Distributable {
    void distribute(String version) {}
}

@CompileStatic
class Distribution implements Distributable {
    double number = 1234.234 / 567
    def otherNumber = 3 / 4
    boolean archivable = condition ?: true
    def ternary = a ? b : c
    String name = "Guillaume"
    Closure description = null
    List<DownloadPackage> packages = []
    String regex = ~/.*foo.*/
    String multi = '''
        multi line string
    ''' + """
        now with double quotes and \${gstring}
    """ + $/
        even with dollar slashy strings
    /$

    /**
     * description method
     * @param cl the closure
     */
    void description(Closure cl) { this.description = cl }

    void version(String name, Closure versionSpec) {
        def closure = { println "hi" } as Runnable

        MyList ml = [1, 2, [a: 1, b:2,c :3]]
        for (ch in "name") {}

        // single line comment
        DownloadPackage pkg = new DownloadPackage(version: name)

        check that: true

        label:
        def clone = versionSpec.rehydrate(pkg, pkg, pkg)
        /*
            now clone() in a multiline comment
        */
        clone()
        packages.add(pkg)

        assert 4 / 2 == 2
    }
}`;

preview.type_javascript = `function $initHighlight(block, cls) {
  try {
    if (cls.search(/\\bno\\-highlight\\b/) != -1)
      return process(block, true, 0x0F) +
             \` class="\${cls}"\`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }

  return (
    <div>
      <web-component>{block}</web-component>
    </div>
  )
}

export  $initHighlight;`;

preview.type_markdown = `# hello world

you can write text [with links](http://example.com) inline or [link references][1].

* one _thing_ has *em*phasis
* two __things__ are **bold**

[1]: http://example.com

---

hello world
===========

<this_is inline="xml"></this_is>

> markdown is so cool

    so are code segments

1. one thing (yeah!)
2. two thing \`i can write code\`, and \`more\` wipee!`;

preview.type_ruby = `# The Greeter class
class Greeter
  def initialize(name)
    @name = name.capitalize
  end

  def salute
    puts "Hello #{@name}!"
  end
end

g = Greeter.new("world")
g.salute`;


preview.type_xml = `<!DOCTYPE html>
<title>Title</title>

<style>body {width: 500px;}</style>

<script type="application/javascript">
  function $init() {return true;}
</script>

<body>
  <p checked class="title" id='title'>Title</p>
  <!-- here goes the rest of the page -->
</body>`;

preview.type_python = `@requires_authorization
def somefunc(param1='', param2=0):
    r'''A docstring'''
    if param1 > param2: # interesting
        print 'Gre\\'ater'
    return (param2 - param1 + 1 + 0b10l) or None

class SomeClass:
    pass

>>> message = '''interpreter
... prompt'''`;

