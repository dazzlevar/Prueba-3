# Generated by Django 4.0.5 on 2022-06-10 09:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_remove_producto_nuevoproducto'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='producto',
            name='fecha_fabricacion',
        ),
    ]