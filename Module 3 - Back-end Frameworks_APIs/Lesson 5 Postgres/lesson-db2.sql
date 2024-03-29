PGDMP     &                	    y         	   lesson_db    14.0    14.0 #    
           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            
           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            
           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            
           1262    16394 	   lesson_db    DATABASE     n   CREATE DATABASE lesson_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United Kingdom.1252';
    DROP DATABASE lesson_db;
                postgres    false            ╓            1259    16415    car_park    TABLE     ì   CREATE TABLE public.car_park (
    id integer NOT NULL,
    address character varying(500) NOT NULL,
    number_of_slots integer NOT NULL
);
    DROP TABLE public.car_park;
       public         heap    postgres    false            ╒            1259    16414    car_park_id_seq    SEQUENCE     ç   CREATE SEQUENCE public.car_park_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.car_park_id_seq;
       public          postgres    false    214            
           0    0    car_park_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.car_park_id_seq OWNED BY public.car_park.id;
          public          postgres    false    213            ╘            1259    16403    drivers    TABLE     ƒ   CREATE TABLE public.drivers (
    id integer NOT NULL,
    car_licence_number character varying(20) NOT NULL,
    full_name character varying(100) NOT NULL
);
    DROP TABLE public.drivers;
       public         heap    postgres    false            ╙            1259    16402    drivers_id_seq    SEQUENCE     å   CREATE SEQUENCE public.drivers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.drivers_id_seq;
       public          postgres    false    212            
           0    0    drivers_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.drivers_id_seq OWNED BY public.drivers.id;
          public          postgres    false    211            ╪            1259    16433    parking_histories    TABLE     û   CREATE TABLE public.parking_histories (
    id integer NOT NULL,
    vehicle_id integer,
    slot_number integer NOT NULL,
    car_park_id integer
);
 %   DROP TABLE public.parking_histories;
       public         heap    postgres    false            ╫            1259    16432    parking_histories_id_seq    SEQUENCE     É   CREATE SEQUENCE public.parking_histories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.parking_histories_id_seq;
       public          postgres    false    216            
           0    0    parking_histories_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.parking_histories_id_seq OWNED BY public.parking_histories.id;
          public          postgres    false    215            ╥            1259    16396    vehicles    TABLE     »   CREATE TABLE public.vehicles (
    id integer NOT NULL,
    type character varying(50) NOT NULL,
    car_plate_number character varying(10) NOT NULL,
    driver_id integer
);
    DROP TABLE public.vehicles;
       public         heap    postgres    false            ╤            1259    16395    vehicles_id_seq    SEQUENCE     ç   CREATE SEQUENCE public.vehicles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.vehicles_id_seq;
       public          postgres    false    210            
           0    0    vehicles_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.vehicles_id_seq OWNED BY public.vehicles.id;
          public          postgres    false    209            m           2604    16418    car_park id    DEFAULT     j   ALTER TABLE ONLY public.car_park ALTER COLUMN id SET DEFAULT nextval('public.car_park_id_seq'::regclass);
 :   ALTER TABLE public.car_park ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213    214            l           2604    16406 
   drivers id    DEFAULT     h   ALTER TABLE ONLY public.drivers ALTER COLUMN id SET DEFAULT nextval('public.drivers_id_seq'::regclass);
 9   ALTER TABLE public.drivers ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    212    212            n           2604    16436    parking_histories id    DEFAULT     |   ALTER TABLE ONLY public.parking_histories ALTER COLUMN id SET DEFAULT nextval('public.parking_histories_id_seq'::regclass);
 C   ALTER TABLE public.parking_histories ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            k           2604    16399    vehicles id    DEFAULT     j   ALTER TABLE ONLY public.vehicles ALTER COLUMN id SET DEFAULT nextval('public.vehicles_id_seq'::regclass);
 :   ALTER TABLE public.vehicles ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    210    210            

          0    16415    car_park 
   TABLE DATA           @   COPY public.car_park (id, address, number_of_slots) FROM stdin;
    public          postgres    false    214            
          0    16403    drivers 
   TABLE DATA           D   COPY public.drivers (id, car_licence_number, full_name) FROM stdin;
    public          postgres    false    212            
          0    16433    parking_histories 
   TABLE DATA           U   COPY public.parking_histories (id, vehicle_id, slot_number, car_park_id) FROM stdin;
    public          postgres    false    216            
          0    16396    vehicles 
   TABLE DATA           I   COPY public.vehicles (id, type, car_plate_number, driver_id) FROM stdin;
    public          postgres    false    210            
           0    0    car_park_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.car_park_id_seq', 1, true);
          public          postgres    false    213            
           0    0    drivers_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.drivers_id_seq', 2, true);
          public          postgres    false    211            
           0    0    parking_histories_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.parking_histories_id_seq', 3, true);
          public          postgres    false    215            
           0    0    vehicles_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.vehicles_id_seq', 6, true);
          public          postgres    false    209            t           2606    16422    car_park car_park_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.car_park
    ADD CONSTRAINT car_park_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.car_park DROP CONSTRAINT car_park_pkey;
       public            postgres    false    214            r           2606    16408    drivers drivers_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.drivers
    ADD CONSTRAINT drivers_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.drivers DROP CONSTRAINT drivers_pkey;
       public            postgres    false    212            v           2606    16438 (   parking_histories parking_histories_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.parking_histories
    ADD CONSTRAINT parking_histories_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.parking_histories DROP CONSTRAINT parking_histories_pkey;
       public            postgres    false    216            p           2606    16401    vehicles vehicles_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.vehicles
    ADD CONSTRAINT vehicles_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.vehicles DROP CONSTRAINT vehicles_pkey;
       public            postgres    false    210            y           2606    16444     parking_histories fk_car_park_id 
   FK CONSTRAINT     å   ALTER TABLE ONLY public.parking_histories
    ADD CONSTRAINT fk_car_park_id FOREIGN KEY (car_park_id) REFERENCES public.car_park(id);
 J   ALTER TABLE ONLY public.parking_histories DROP CONSTRAINT fk_car_park_id;
       public          postgres    false    3188    214    216            w           2606    16409    vehicles fk_driver_id 
   FK CONSTRAINT     x   ALTER TABLE ONLY public.vehicles
    ADD CONSTRAINT fk_driver_id FOREIGN KEY (driver_id) REFERENCES public.drivers(id);
 ?   ALTER TABLE ONLY public.vehicles DROP CONSTRAINT fk_driver_id;
       public          postgres    false    3186    210    212            x           2606    16439    parking_histories fk_vehicle_id 
   FK CONSTRAINT     ä   ALTER TABLE ONLY public.parking_histories
    ADD CONSTRAINT fk_vehicle_id FOREIGN KEY (vehicle_id) REFERENCES public.vehicles(id);
 I   ALTER TABLE ONLY public.parking_histories DROP CONSTRAINT fk_vehicle_id;
       public          postgres    false    210    216    3184            

   $   x£3Σt╩╔V02░Tp╠KW≡═W≡╬╠τ4µè╤πΓΓ cR      
   '   x£3Σ442vtrµ⌠M,¬Σ2Γ4261Γ⌠╩╧╚πè╤πΓΓ k╤ô      
      x£3µ4σ460Γ4Σè╤πΓΓ ⁿ      
   K   x£3ΓI¼╚Σ÷p4626îΓî±π2ß
πvr142Ä 	ÿråò&gs{yàL@bfE!í@╙`N#«=... ß║      #    
           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            
           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            
           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            
           1262    16394 	   lesson_db    DATABASE     n   CREATE DATABASE lesson_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United Kingdom.1252';
    DROP DATABASE lesson_db;
                postgres    false            ╓            1259    16415    car_park    TABLE     ì   CREATE TABLE public.car_park (
    id integer NOT NULL,
    address character varying(500) NOT NULL,
    number_of_slots integer NOT NULL
);
    DROP TABLE public.car_park;
       public         heap    postgres    false            ╒            1259    16414    car_park_id_seq    SEQUENCE     ç   CREATE SEQUENCE public.car_park_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.car_park_id_seq;
       public          postgres    false    214            
           0    0    car_park_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.car_park_id_seq OWNED BY public.car_park.id;
          public          postgres    false    213            ╘            1259    16403    drivers    TABLE     ƒ   CREATE TABLE public.drivers (
    id integer NOT NULL,
    car_licence_number character varying(20) NOT NULL,
    full_name character varying(100) NOT NULL
);
    DROP TABLE public.drivers;
       public         heap    postgres    false            ╙            1259    16402    drivers_id_seq    SEQUENCE     å   CREATE SEQUENCE public.drivers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.drivers_id_seq;
       public          postgres    false    212            
           0    0    drivers_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.drivers_id_seq OWNED BY public.drivers.id;
          public          postgres    false    211            ╪            1259    16433    parking_histories    TABLE     û   CREATE TABLE public.parking_histories (
    id integer NOT NULL,
    vehicle_id integer,
    slot_number integer NOT NULL,
    car_park_id integer
);
 %   DROP TABLE public.parking_histories;
       public         heap    postgres    false            ╫            1259    16432    parking_histories_id_seq    SEQUENCE     É   CREATE SEQUENCE public.parking_histories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.parking_histories_id_seq;
       public          postgres    false    216            
           0    0    parking_histories_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.parking_histories_id_seq OWNED BY public.parking_histories.id;
          public          postgres    false    215            ╥            1259    16396    vehicles    TABLE     »   CREATE TABLE public.vehicles (
    id integer NOT NULL,
    type character varying(50) NOT NULL,
    car_plate_number character varying(10) NOT NULL,
    driver_id integer
);
    DROP TABLE public.vehicles;
       public         heap    postgres    false            ╤            1259    16395    vehicles_id_seq    SEQUENCE     ç   CREATE SEQUENCE public.vehicles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.vehicles_id_seq;
       public          postgres    false    210            
           0    0    vehicles_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.vehicles_id_seq OWNED BY public.vehicles.id;
          public          postgres    false    209            m           2604    16418    car_park id    DEFAULT     j   ALTER TABLE ONLY public.car_park ALTER COLUMN id SET DEFAULT nextval('public.car_park_id_seq'::regclass);
 :   ALTER TABLE public.car_park ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213    214            l           2604    16406 
   drivers id    DEFAULT     h   ALTER TABLE ONLY public.drivers ALTER COLUMN id SET DEFAULT nextval('public.drivers_id_seq'::regclass);
 9   ALTER TABLE public.drivers ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    212    212            n           2604    16436    parking_histories id    DEFAULT     |   ALTER TABLE ONLY public.parking_histories ALTER COLUMN id SET DEFAULT nextval('public.parking_histories_id_seq'::regclass);
 C   ALTER TABLE public.parking_histories ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            k           2604    16399    vehicles id    DEFAULT     j   ALTER TABLE ONLY public.vehicles ALTER COLUMN id SET DEFAULT nextval('public.vehicles_id_seq'::regclass);
 :   ALTER TABLE public.vehicles ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    210    210            

          0    16415    car_park 
   TABLE DATA           @   COPY public.car_park (id, address, number_of_slots) FROM stdin;
    public          postgres    false    214          
          0    16403    drivers 
   TABLE DATA           D   COPY public.drivers (id, car_licence_number, full_name) FROM stdin;
    public          postgres    false    212   E       
          0    16433    parking_histories 
   TABLE DATA           U   COPY public.parking_histories (id, vehicle_id, slot_number, car_park_id) FROM stdin;
    public          postgres    false    216   |       
          0    16396    vehicles 
   TABLE DATA           I   COPY public.vehicles (id, type, car_plate_number, driver_id) FROM stdin;
    public          postgres    false    210   ú       
           0    0    car_park_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.car_park_id_seq', 1, true);
          public          postgres    false    213            
           0    0    drivers_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.drivers_id_seq', 2, true);
          public          postgres    false    211            
           0    0    parking_histories_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.parking_histories_id_seq', 3, true);
          public          postgres    false    215            
           0    0    vehicles_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.vehicles_id_seq', 6, true);
          public          postgres    false    209            t           2606    16422    car_park car_park_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.car_park
    ADD CONSTRAINT car_park_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.car_park DROP CONSTRAINT car_park_pkey;
       public            postgres    false    214            r           2606    16408    drivers drivers_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.drivers
    ADD CONSTRAINT drivers_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.drivers DROP CONSTRAINT drivers_pkey;
       public            postgres    false    212            v           2606    16438 (   parking_histories parking_histories_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.parking_histories
    ADD CONSTRAINT parking_histories_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.parking_histories DROP CONSTRAINT parking_histories_pkey;
       public            postgres    false    216            p           2606    16401    vehicles vehicles_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.vehicles
    ADD CONSTRAINT vehicles_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.vehicles DROP CONSTRAINT vehicles_pkey;
       public            postgres    false    210            y           2606    16444     parking_histories fk_car_park_id 
   FK CONSTRAINT     å   ALTER TABLE ONLY public.parking_histories
    ADD CONSTRAINT fk_car_park_id FOREIGN KEY (car_park_id) REFERENCES public.car_park(id);
 J   ALTER TABLE ONLY public.parking_histories DROP CONSTRAINT fk_car_park_id;
       public          postgres    false    3188    214    216            w           2606    16409    vehicles fk_driver_id 
   FK CONSTRAINT     x   ALTER TABLE ONLY public.vehicles
    ADD CONSTRAINT fk_driver_id FOREIGN KEY (driver_id) REFERENCES public.drivers(id);
 ?   ALTER TABLE ONLY public.vehicles DROP CONSTRAINT fk_driver_id;
       public          postgres    false    3186    210    212            x           2606    16439    parking_histories fk_vehicle_id 
   FK CONSTRAINT     ä   ALTER TABLE ONLY public.parking_histories
    ADD CONSTRAINT fk_vehicle_id FOREIGN KEY (vehicle_id) REFERENCES public.vehicles(id);
 I   ALTER TABLE ONLY public.parking_histories DROP CONSTRAINT fk_vehicle_id;
       public          postgres    false    210    216    3184           
