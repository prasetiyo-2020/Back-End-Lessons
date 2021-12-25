Catatan Log Perubahan
```
$ git log
> commit febe6d9cb315099abc3f1d8d7b2c43603e10f431 (HEAD -> main)
> Author: Prasetiyo <84963363+prasetiyo-2020@users.noreply.github.com>
> Date:   Tue Oct 26 13:15:11 2021 +0700
    commit hasil revert

> commit ae2d3667fc29b78eca4a1c9e4bf63827c5e89bc0
> Author: Prasetiyo <84963363+prasetiyo-2020@users.noreply.github.com>
> Date:   Tue Oct 26 13:08:50 2021 +0700
    menambah tugas ERD
```

Log yang Lebih Pendek
```
$ git log --oneline
febe6d9 (HEAD -> main) commit hasil revert
ae2d366 menambah tugas ERD
37d2634 menambah tugas kuliah
```

Log pada Nomer Revisi/Commit
```
$ git log ae2d3667fc29b78eca4a1c9e4bf63827c5e89bc0
> commit ae2d3667fc29b78eca4a1c9e4bf63827c5e89bc0
> Author: Prasetiyo <84963363+prasetiyo-2020@users.noreply.github.com>
> Date:   Tue Oct 26 13:08:50 2021 +0700
    menambah tugas ERD

> commit 37d26344781e70b2f46e8276249ed8c28f30dd07
> Author: Prasetiyo <84963363+prasetiyo-2020@users.noreply.github.com>
> Date:   Tue Oct 26 13:07:56 2021 +0700
    menambah tugas kuliah
```

Log pada File Tertentu
```
$ git log index.html
> commit 8201915ead24b4e06e1a3ca0c4fdca5f375edd74
> Author: Prasetiyo <84963363+prasetiyo-2020@users.noreply.github.com>
> Date:   Tue Oct 26 11:21:14 2021 +0700
    add file
```

Log Revisi yang dilakukan oleh Author Tertentu
``` 
$ git log --author='Prasetiyo'
> commit febe6d9cb315099abc3f1d8d7b2c43603e10f431 (HEAD -> main)
> Author: Prasetiyo <84963363+prasetiyo-2020@users.noreply.github.com>
> Date:   Tue Oct 26 13:15:11 2021 +0700
    commit hasil revert

> commit ae2d3667fc29b78eca4a1c9e4bf63827c5e89bc0
> Author: Prasetiyo <84963363+prasetiyo-2020@users.noreply.github.com>
> Date:   Tue Oct 26 13:08:50 2021 +0700
    menambah tugas ERD
```