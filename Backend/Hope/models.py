from django.db import models

# Create your models here.

class Gallery(models.Model):
    description = models.CharField(max_length=100, default="Gallery 01")
    image = models.ImageField(upload_to="photo_gallery/")

    def __str__(self):
        return self.description

class Blog(models.Model):
    title = models.CharField(max_length=300)
    description = models.TextField()
    image = models.ImageField(upload_to='blog_images/')
    date = models.DateField(blank=True, null=True)
    category = models.CharField(max_length=50, default="Hope")
    creator = models.CharField(max_length=100, default="Creator")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class Cause(models.Model):
    title = models.CharField(max_length=300)
    description = models.TextField()
    image = models.ImageField(upload_to='cause_images/')
    date = models.DateField(blank=True, null=True)
    creator = models.CharField(max_length=100, default="Creator")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Client(models.Model):
    name = models.CharField(max_length=200)
    logo = models.ImageField(upload_to="sponsor_logos")

    def __str__(self):
        return self.name
    
class Volunteer(models.Model):
    name = models.CharField(max_length=100, verbose_name="Name")
    role = models.CharField(max_length=100, verbose_name="Role")
    profile_image = models.ImageField(
        upload_to="volunteers/",
        verbose_name="Profile Image",
        blank=True,
        null=True,
    )
    email = models.EmailField(
        max_length=255,
        verbose_name="Email Address",
        blank=True,
        null=True,
    )
    phone_number = models.CharField(
        max_length=15,
        verbose_name="Phone Number",
        blank=True,
        null=True,
    )
    facebook_username = models.CharField(
        max_length=100,
        verbose_name="Facebook Username",
        blank=True,
        null=True,
    )
    twitter_username = models.CharField(
        max_length=100,
        verbose_name="Twitter Username",
        blank=True,
        null=True,
    )
    instagram_username = models.CharField(
        max_length=100,
        verbose_name="Instagram Username",
        blank=True,
        null=True,
    )
    facebook_url = models.URLField(
        max_length=255,
        verbose_name="Facebook URL",
        blank=True,
        null=True,
    )
    twitter_url = models.URLField(
        max_length=255,
        verbose_name="Twitter URL",
        blank=True,
        null=True,
    )
    instagram_url = models.URLField(
        max_length=255,
        verbose_name="Instagram URL",
        blank=True,
        null=True,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        # Automatically generate full URLs for social media
        if self.facebook_username:
            self.facebook_url = f"https://www.facebook.com/{self.facebook_username}"
        if self.twitter_username:
            self.twitter_url = f"https://twitter.com/{self.twitter_username}"
        if self.instagram_username:
            self.instagram_url = f"https://www.instagram.com/{self.instagram_username}"

        # Call the parent class's save method
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name
    
class BankAccount(models.Model):
    bank_name = models.CharField(max_length=100)
    account_number = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.bank_name

class Program(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    color = models.CharField(max_length=7, default="#cc1631")

    def __str__(self):
        return self.name

class Project(models.Model):
    program = models.ForeignKey(Program, on_delete=models.CASCADE, related_name="projects")
    title = models.CharField(max_length=255)
    description = models.TextField()
    color = models.CharField(max_length=7, default="#cc1631")
    image = models.ImageField(upload_to="project_images/")
    video = models.FileField(upload_to="project_videos/", blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        # Set the color to the Program's color if it's still the default value
        if self.color == "#cc1631":
            self.color = self.program.color  # Get the color from the associated Program
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
    
class Resource(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to="resource/", null=True, blank=True)
    color = models.CharField(max_length=7, default="#cc1631")

    def __str__(self):
        return self.name

class ResourceDetail(models.Model):
    resource = models.ForeignKey(Resource, on_delete=models.CASCADE, related_name="resourceDetails")
    title = models.CharField(max_length=255)
    description = models.TextField()
    color = models.CharField(max_length=7, default="#cc1631")
    image = models.ImageField(upload_to="resource_images/")
    video = models.FileField(upload_to="resource_videos/", blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        # Set the color to the Program's color if it's still the default value
        if self.color == "#cc1631":
            self.color = self.resource.color  # Get the color from the associated Program
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title