# CHECKOUT, RESET, REVERT
## CHECKOUT
### Membatalkan Perubahan
Penggunaan dilakukan saat revisi belum staged maupun commited
```
$ git checkout index.html
```

### Membatalkan Perubahan File yang Sudah dalam Kondisi staged
```
$ git status
> On branch main
> Your branch is up to date with 'origin/main'.
> Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   Tugas_Kuliah.txt
```

## RESET
```
$ git reset Tugas_Kuliah.txt
Unstaged changes after reset:
M       Tugas_Kuliah.txt
```

```
$ git status
> On branch main
> Your branch is up to date with 'origin/main'.

> Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   Tugas_Kuliah.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

## REVERT
```
$ git revert 37d26344781e70b2f46e8276249ed8c28f30dd07
> Auto-merging Tugas Kuliah.txt
> CONFLICT (content): Merge conflict in Tugas Kuliah.txt
> error: could not revert 37d2634... menambah tugas kuliah
> hint: after resolving the conflicts, mark the corrected paths
> hint: with 'git add <paths>' or 'git rm <paths>'
> hint: and commit the result with 'git commit'  
```
